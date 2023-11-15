import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import {
  Checkbox,
  Button,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ProjectDetails from "./projectDetails/ProjectDetails";
import { CustomerDataDto, ProjectInfo } from "../../dtos/customer-data-dto";
import dayjs, { Dayjs } from "dayjs";
import uuid from "react-uuid";
import { useFormik } from "formik";
import FormSchema from "./validationSchema";
import "./form.scss";

interface FormProps {
  customerInfo: CustomerDataDto;
  reducer: (payload: CustomerDataDto) => AnyAction;
  handleSubmit: () => void;
}

const Form = ({ customerInfo, reducer, handleSubmit }: FormProps) => {
  const dispatch = useDispatch();
  const { about, company, industry, isActive, projects } = customerInfo;

  const formik = useFormik({
    initialValues: customerInfo,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      handleSubmit();
    },
  });

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    let form = { ...customerInfo };
    form = { ...customerInfo, [name]: checked };

    dispatch(reducer(form));
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    formik.handleChange(event);
    const { name, value } = event.target;
    let form = { ...customerInfo };
    form = { ...customerInfo, [name]: value };

    dispatch(reducer(form));
  };

  interface UpdateState {
    index: number;
    property: string;
    value: string;
  }
  const updateState = ({ property, value, index }: UpdateState) => {
    const updatedProjectsList: ProjectInfo[] = [...customerInfo.projects];
    updatedProjectsList[index] = {
      ...updatedProjectsList[index],
      [property]: value,
    };

    const form = { ...customerInfo, projects: updatedProjectsList };

    dispatch(reducer(form));
  };

  const handleChangeProject = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    updateState({ property: name, value, index });
  };

  const handleDateChange = (
    value: Dayjs | null,
    name: string,
    index: number
  ) => {
    if (value?.isValid()) {
      const dateString = dayjs(value).toISOString();
      updateState({ property: name, value: dateString, index });
    }
    if (value === null) {
      updateState({ property: name, value: "", index });
    }
  };

  const handleAddProject = () => {
    let projects: ProjectInfo[] = [...customerInfo.projects];

    const project: ProjectInfo = {
      id: uuid(),
      name: "",
      contact: "",
      start_date: null,
      end_date: null,
    };

    projects.push(project);

    dispatch(reducer({ ...customerInfo, projects }));
  };

  const handleRemoveProject = (index: number) => {
    let projects: ProjectInfo[] = [...customerInfo.projects];

    projects.splice(index, 1);

    dispatch(reducer({ ...customerInfo, projects }));
  };

  return (
    <Grid container className="form-margin">
      <form onSubmit={formik.handleSubmit} className="form-width">
        <Grid container>
          <Grid display="flex" flexDirection="column" item xs={12} md={10}>
            <TextField
              id="company"
              name="company"
              label="Company"
              variant="outlined"
              value={company}
              className="form-input-margin"
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
            />
            <TextField
              id="industry"
              name="industry"
              label="Industry"
              variant="outlined"
              value={industry}
              className="form-input-margin"
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              error={formik.touched.industry && Boolean(formik.errors.industry)}
              helperText={formik.touched.industry && formik.errors.industry}
            />
            <TextField
              id="about"
              name="about"
              label="About"
              variant="outlined"
              multiline
              rows={2}
              value={about}
              className="form-input-margin"
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              error={formik.touched.about && Boolean(formik.errors.about)}
              helperText={formik.touched.about && formik.errors.about}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="isActive"
                  checked={isActive}
                  onChange={handleCheckboxChange}
                />
              }
              label="Active Customer"
            />
          </Grid>
          <Grid
            item
            md={2}
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              color="secondary"
              className="form-button-style"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
            <Link to="/">
              <Button
                color="secondary"
                className="form-button-style"
                variant="outlined"
              >
                Go back
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container>
          <h3>Projects</h3>
          {projects?.map((project: ProjectInfo, index: number) => {
            return (
              <ProjectDetails
                key={project.id}
                project={project}
                handleChangeProject={handleChangeProject}
                handleDateChange={handleDateChange}
                handleRemoveProject={handleRemoveProject}
                index={index}
              />
            );
          })}
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button
              color="secondary"
              variant="contained"
              className="form-button-style"
              onClick={() => handleAddProject()}
            >
              Add Project
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default Form;
