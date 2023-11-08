import { Grid, Button, TextField } from "@mui/material";
import { ProjectInfo } from "../../../dtos/customer-data-dto";
import { ChangeEvent } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import "./project-details.css";

interface ProjectProps {
  project: ProjectInfo;
  handleProject: (
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
  handleProject,
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
            label="Name"
            variant="outlined"
            value={name}
            onChange={(event) => handleProject(event, index)}
            className="input-margin"
          />
          <TextField
            id="contact"
            name="contact"
            label="Contact"
            variant="outlined"
            value={contact ?? ""}
            onChange={(event) => handleProject(event, index)}
            className="input-margin"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateField", "DateField"]}>
              <DateField
                className="date-margin"
                label="Start Date"
                defaultValue={dayjs(start_date ?? null)}
                name="start_date"
                onChange={(newValue) =>
                  handleDateChange(newValue, "start_date", index)
                }
              />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateField", "DateField"]}>
              <DateField
                className="date-margin"
                label="End Date"
                defaultValue={dayjs(end_date ?? null)}
                name="end_date"
                onChange={(newValue) =>
                  handleDateChange(newValue, "end_date", index)
                }
              />
            </DemoContainer>
          </LocalizationProvider>
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
