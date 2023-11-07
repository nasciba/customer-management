import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import ProjectDetails from "./project-details/project-details";
import { CustomerDataDto, ProjectInfo } from "../../dtos/customer-data-dto";
import dayjs, { Dayjs } from "dayjs";
import "./form.css";
import { AnyAction } from "redux";
import uuid from "react-uuid";

interface FormProps {
  customerInfo: CustomerDataDto;
  addCustomerReducer: (payload: CustomerDataDto) => AnyAction;
}

const Form = ({ customerInfo, addCustomerReducer }: FormProps) => {
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
    <Box display="flex" flexDirection="column">
      <TextField
        id="company"
        name="company"
        label="Company"
        variant="outlined"
        value={company}
        className="form-margin"
        onChange={handleInputChange}
      />
      <TextField
        id="industry"
        name="industry"
        label="Industry"
        variant="outlined"
        value={industry}
        className="form-margin"
        onChange={handleInputChange}
      />
      <TextField
        id="about"
        name="about"
        label="About"
        variant="outlined"
        multiline
        value={about}
        className="form-margin"
        onChange={handleInputChange}
      />
      <section>
        <Box display="flex" flexDirection="column">
          <h4>Projects</h4>
          {projects?.map((project: ProjectInfo, index: number) => {
            const projectNumber = index + 1;
            return (
              <Box key={project.id}>
                <h5>Project {projectNumber}</h5>
                <Box display="flex" flexDirection="row" >
                  <ProjectDetails
                    project={project}
                    handleProject={handleProjects}
                    handleDateChange={handleDateChange}
                    index={index}
                  />
                  <Button onClick={() => handleRemoveProject(index)}>
                    Remove
                  </Button>
                </Box>
              </Box>
            );
          })}
          <Button onClick={() => handleAddProject()}>Add project</Button>
        </Box>
      </section>
    </Box>
  );
};

export default Form;
