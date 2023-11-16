import { ChangeEvent } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ProjectInfo } from "../../../types/customerData";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "./projectDetails.scss";

interface ProjectProps {
  project: ProjectInfo;
  updateProjectState: ({
    property,
    value,
    index,
  }: {
    index: number;
    property: string;
    value: string;
  }) => void;
  handleChangeValidation: (e: ChangeEvent<any>) => void;
  handleRemoveProject: (index: number) => void;
  index: number;
  onBlur: {
    (e: React.FocusEvent<any, Element>): void;
  };
  touched: any;
  errors: any;
}

const ProjectDetails = ({
  project,
  index,
  errors,
  touched,
  updateProjectState,
  handleChangeValidation,
  handleRemoveProject,
  onBlur,
}: ProjectProps) => {

  const { name, contact, start_date, end_date } = project;
  const projectNumber = index + 1;

  const handleChangeProject = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    handleChangeValidation(event);
    const { name, value } = event.target;

    let fieldName = name.split('.')[1];

    updateProjectState({ property: fieldName, value, index });
  };

  const handleProjectDate = (
    value: Dayjs | null,
    name: string,
    index: number
  ) => {
    if (value?.isValid()) {
      const dateString = dayjs(value).toISOString();
      updateProjectState({ property: name, value: dateString, index });
    }
    if (value === null) {
      updateProjectState({ property: name, value: "", index });
    }
  };

  return (
    <Grid
      container
      className="project-details-card"
      display="flex"
      flexDirection="column"
    >
      <h4>Project {projectNumber}</h4>
      <Grid container>
        <Grid item display="flex" flexDirection="column" xs={12} md={10}>
          <TextField
            id="name"
            name={`projects[${index}].name`}
            label="Project Name"
            variant="outlined"
            value={name}
            onChange={(event) => handleChangeProject(event, index)}
            className="project-details-input"
            onBlur={onBlur}
            error={touched?.name && Boolean(errors?.name)}
            helperText={touched?.name && errors?.name}
          />
          <TextField
            id="contact"
            name={`projects[${index}].contact`}
            label="Email"
            placeholder="email@email.com"
            variant="outlined"
            value={contact?? ""}
            onChange={(event) => handleChangeProject(event, index)}
            className="project-details-input"
            onBlur={onBlur}
            error={touched?.contact && Boolean(errors?.contact)}
            helperText={touched?.contact && errors?.contact}
          />
          <Grid container>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                className="project-details-date"
                label="Start Date"
                value={dayjs(start_date ?? undefined)}
                onChange={(newValue) =>
                  handleProjectDate(newValue, "start_date", index)
                }
                maxDate={dayjs(end_date)}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                className="project-details-date"
                label="End Date"
                value={dayjs(end_date ?? undefined)}
                views={["day", "month", "year"]}
                onChange={(newValue) =>
                  handleProjectDate(newValue, "end_date", index)
                }
                minDate={dayjs(start_date)}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} display="flex" justifyContent="center">
          <Button
            className="project-details-remove-button"
            color="secondary"
            variant="outlined"
            onClick={() => handleRemoveProject(index)}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
