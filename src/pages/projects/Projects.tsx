import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCustomerById from "../../service/getCustomer";
import { ProjectInfo } from "../../types/customerData";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Loading from "../../components/loading/Loading";
import ErrorScreen from "../../components/errorScreen/ErrorScreen";
import { Grid, Tooltip, Typography } from "@mui/material";
import dayjs from "dayjs";
import "./projects.scss";

const Projects = () => {
  const tableColumns: GridColDef[] = [
    {
      align: "center",
      field: "name",
      headerAlign: "center",
      headerName: "Project Name",
      headerClassName: "projects-table-header",
      flex: 0.25,
      minWidth: 200,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <div className="home-about-text">{params.value}</div>
        </Tooltip>
      ),
    },
    {
      align: "center",
      field: "contact",
      flex: 0.25,
      headerAlign: "center",
      headerName: "Email",
      headerClassName: "projects-table-header",
      minWidth: 200,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <div className="home-about-text">{params.value ?? "Not informed"}</div>
        </Tooltip>
      ),
    },
    {
      align: "center",
      field: "start_date",
      flex: 0.25,
      headerAlign: "center",
      headerName: "Start Date",
      headerClassName: "projects-table-header",
      minWidth: 200,
      valueFormatter: (params) =>
        dayjs(params.value).isValid()
          ? dayjs(params.value).format("MM/DD/YYYY")
          : "Not informed",
    },
    {
      align: "center",
      field: "end_date",
      flex: 0.25,
      headerAlign: "center",
      headerName: "End Date",
      headerClassName: "projects-table-header",
      minWidth: 200,
      valueFormatter: (params) =>
        dayjs(params.value).isValid()
          ? dayjs(params.value).format("MM/DD/YYYY")
          : "Not informed",
    },
  ];
  const { id } = useParams() as { id: string };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectInfo[]>([]);

  const getProjects = useCallback(async (id: string): Promise<void> => {
    try {
      setIsLoading(true);
      const { projects } = await getCustomerById(id);
      setProjects(projects);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProjects(id);
  }, [getProjects, id]);

  if (isLoading) return <Loading />;
  if (hasError) return <ErrorScreen />;
  return (
    <Grid container display="flex" flexDirection="column">
      <Typography className="projects-title" variant="h4">Projects</Typography>
      <DataGrid
        className="projects-table"
        columns={tableColumns}
        rows={projects}
        columnBuffer={tableColumns.length}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
      />
    </Grid>
  );
};

export default Projects;
