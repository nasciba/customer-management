import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import {
  Checkbox,
  Button,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProjectDetails from "./projectDetails/ProjectDetails";
import { CustomerData, ProjectInfo } from "../../types/customerData";
import uuid from "react-uuid";
import { useFormik } from "formik";
import formSchema from "./validationSchema";
import "./form.scss";
import { UpdateProjectState } from "./types";

interface FormProps {
  customerInfo: CustomerData;
  reducer: (payload: CustomerData) => AnyAction;
  handleSubmit: () => void;
}

const Form = ({ customerInfo, reducer, handleSubmit }: FormProps) => {
  const dispatch = useDispatch();
  const { about, company, industry, isActive, projects } = customerInfo;

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: customerInfo,
    validationSchema: formSchema,
    onSubmit: () => {
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

  const updateProjectState = ({
    property,
    value,
    index,
  }: UpdateProjectState) => {
    const updatedProjectsList: ProjectInfo[] = [...customerInfo.projects];

    updatedProjectsList[index] = {
      ...updatedProjectsList[index],
      [property]: value,
    };

    const form = { ...customerInfo, projects: updatedProjectsList };

    dispatch(reducer(form));
  };

  const handleAddProject = () : void => {
    let projects: ProjectInfo[] = [...customerInfo.projects];
    const project: ProjectInfo = {
      id: uuid(),
      name: "",
      contact: "",
      start_date: null,
      end_date: null,
    };

    projects.push(project);
    
    formik.setFieldValue("projects", projects);

    dispatch(reducer({ ...customerInfo, projects }));
  };

  const handleRemoveProject = (index: number) => {
    let projects: ProjectInfo[] = [...customerInfo.projects];

    projects.splice(index, 1);

    formik.setFieldValue("projects", projects);

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
            <Button
              color="secondary"
              className="form-button-style"
              variant="outlined"
              onClick={() => navigate(-1)}
            >
              Go back
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <h3>Projects</h3>
          {projects?.map((project: ProjectInfo, index: number) => {
            return (
              <ProjectDetails
                key={project.id}
                project={project}
                updateProjectState={updateProjectState}
                handleRemoveProject={handleRemoveProject}
                index={index}
                onBlur={formik.handleBlur}
                handleChangeValidation={formik.handleChange}
                touched={formik.touched?.projects?.[index]}
                errors={formik.errors?.projects?.[index]}
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
