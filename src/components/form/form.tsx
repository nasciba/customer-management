import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { Button, Grid, TextField } from "@mui/material";
import ProjectDetails from "./project-details/project-details";
import { CustomerDataDto, ProjectInfo } from "../../dtos/customer-data-dto";
import dayjs, { Dayjs } from "dayjs";
import uuid from "react-uuid";
import "./form.css";

interface FormProps {
  customerInfo: CustomerDataDto;
  addCustomerReducer: (payload: CustomerDataDto) => AnyAction;
  handleSubmit: () => void;
}

const Form = ({
  customerInfo,
  addCustomerReducer,
  handleSubmit,
}: FormProps) => {
  const dispatch = useDispatch();
  const { about, company, industry, projects } = customerInfo;

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    let form = { ...customerInfo };
    form = { ...customerInfo, [name]: value };

    dispatch(addCustomerReducer(form));
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

    dispatch(addCustomerReducer(form));
  };

  const handleProjects = (
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
    const dateString = dayjs(value).toISOString();

    updateState({ property: name, value: dateString, index });
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

    dispatch(addCustomerReducer({ ...customerInfo, projects }));
  };

  const handleRemoveProject = (index: number) => {
    let projects: ProjectInfo[] = [...customerInfo.projects];

    projects.splice(index, 1);

    dispatch(addCustomerReducer({ ...customerInfo, projects }));
  };

  return (
    <Grid container>
      <Grid container>
        <Grid display="flex" flexDirection="column" item xs={12} md={10}>
          <TextField
            id="company"
            name="company"
            label="Company"
            variant="outlined"
            value={company}
            className="input-margin"
            onChange={handleInputChange}
          />
          <TextField
            id="industry"
            name="industry"
            label="Industry"
            variant="outlined"
            value={industry}
            className="input-margin"
            onChange={handleInputChange}
          />
          <TextField
            id="about"
            name="about"
            label="About"
            variant="outlined"
            multiline
            value={about}
            className="input-margin"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={2} display="flex" justifyContent="center">
          <Button className="button-style" onClick={() => handleSubmit()}>
            Submit
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
                handleProject={handleProjects}
                handleDateChange={handleDateChange}
                handleRemoveProject={handleRemoveProject}
                index={index}
              />
            );
          })}
          <Grid item xs={12}>

          <Button className="button-style" onClick={() => handleAddProject()}>Add project</Button>
          </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;
