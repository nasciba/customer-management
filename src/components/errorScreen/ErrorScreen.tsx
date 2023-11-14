import { Box, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Link } from "react-router-dom";
import "./errorScreen.scss";

const ErrorScreen = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: 100 }} />
      <Typography className="error-screen-text" variant="h3">
        Something went wrong.
      </Typography>
      <Typography className="error-screen-text" variant="h5">
        Please try again later.
      </Typography>
      <Link to="/" className="error-screen-text">
        Go back to home page
      </Link>
    </Box>
  );
};

export default ErrorScreen;
