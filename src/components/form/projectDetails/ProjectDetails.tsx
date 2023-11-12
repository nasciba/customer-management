import { Grid, Button, TextField } from "@mui/material";
import { ProjectInfo } from "../../../dtos/customer-data-dto";
import { ChangeEvent } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import "./projectDetails.css";

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
    <Grid container className="card" display="flex" flexDirection="column">
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
            className="input-margin"
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
            className="input-margin"
          />
          <Grid container>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                className="date-margin"
                label="Start Date"
                value={dayjs(start_date ?? null)}
                onChange={(newValue) =>
                  handleDateChange(newValue, "start_date", index)
                }
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                className="date-margin"
                label="End Date"
                value={dayjs(end_date ?? null)}
                views={["day", "month", "year"]}
                onChange={(newValue) =>
                  handleDateChange(newValue, "end_date", index)
                }
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} display="flex" justifyContent="center">
          <Button
            className="remove-button"
            color="error"
            variant="contained"
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
