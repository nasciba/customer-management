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
import { useFormik } from "formik";
import formSchema from "./validationSchema";
import { UpdateProjectState } from "./types";
import uuid from "react-uuid";
import "./form.scss";

interface FormProps {
  customerData: CustomerData;
  reducer: (payload: CustomerData) => AnyAction;
  handleSubmit: () => void;
}

const Form = ({ customerData, reducer, handleSubmit }: FormProps) => {
  const dispatch = useDispatch();
  const { about, company, industry, isActive, projects } = customerData;

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: customerData,
    validationSchema: formSchema,
    onSubmit: () => {
      handleSubmit();
    },
  });
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit: handleSubmitFormik,
    setFieldValue,
  } = formik;

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    let form = { ...customerData };
    form = { ...customerData, [name]: checked };

    dispatch(reducer(form));
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleChange(event);
    const { name, value } = event.target;
    let form = { ...customerData };
    form = { ...customerData, [name]: value };

    dispatch(reducer(form));
  };

  const updateProjectState = ({
    property,
    value,
    index,
  }: UpdateProjectState) => {
    const updatedProjectsList: ProjectInfo[] = [...customerData.projects];

    updatedProjectsList[index] = {
      ...updatedProjectsList[index],
      [property]: value,
    };

    const form = { ...customerData, projects: updatedProjectsList };

    dispatch(reducer(form));
  };

  const handleAddProject = (): void => {
    let projects: ProjectInfo[] = [...customerData.projects];
    const project: ProjectInfo = {
      id: uuid(),
      name: "",
      contact: "",
      start_date: null,
      end_date: null,
    };

    projects.push(project);

    setFieldValue("projects", projects);

    dispatch(reducer({ ...customerData, projects }));
  };

  const handleRemoveProject = (index: number) => {
    let projects: ProjectInfo[] = [...customerData.projects];

    projects.splice(index, 1);

    setFieldValue("projects", projects);

    dispatch(reducer({ ...customerData, projects }));
  };

  return (
    <Grid container className="form-margin">
      <form onSubmit={handleSubmitFormik} className="form-width">
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
              onBlur={handleBlur}
              error={touched.company && Boolean(errors.company)}
              helperText={touched.company && errors.company}
            />
            <TextField
              id="industry"
              name="industry"
              label="Industry"
              variant="outlined"
              value={industry}
              className="form-input-margin"
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={touched.industry && Boolean(errors.industry)}
              helperText={touched.industry && errors.industry}
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
              onBlur={handleBlur}
              error={touched.about && Boolean(errors.about)}
              helperText={touched.about && errors.about}
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
                onBlur={handleBlur}
                handleChangeValidation={handleChange}
                touched={touched?.projects?.[index]}
                errors={errors?.projects?.[index]}
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
