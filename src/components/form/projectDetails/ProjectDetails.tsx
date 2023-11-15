import { ChangeEvent } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ProjectInfo } from "../../../dtos/customer-data-dto";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "./projectDetails.scss";

interface ProjectProps {
  project: ProjectInfo;
  handleChangeProject: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => void;
  handleRemoveProject: (index: number) => void;
  handleDateChange: (value: Dayjs | null, name: string, index: number) => void;
  index: number;
}

const ProjectDetails = ({
  project,
  index,
  handleChangeProject,
  handleDateChange,
  handleRemoveProject,
}: ProjectProps) => {
  const { name, contact, start_date, end_date } = project;
  const projectNumber = index + 1;

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
            name="name"
            inputProps={{ maxLength: 50 }}
            label="Name"
            variant="outlined"
            value={name}
            onChange={(event) => handleChangeProject(event, index)}
            className="project-details-input"
          />
          <TextField
            id="contact"
            name="contact"
            label="Contact"
            variant="outlined"
            inputProps={{ itemType: "email" }}
            placeholder="email@email.com"
            value={contact ?? ""}
            onChange={(event) => handleChangeProject(event, index)}
            className="project-details-input"
          />
          <Grid container>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                className="project-details-date"
                label="Start Date"
                value={dayjs(start_date ?? undefined)}
                onChange={(newValue) =>
                  handleDateChange(newValue, "start_date", index)
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
                  handleDateChange(newValue, "end_date", index)
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
