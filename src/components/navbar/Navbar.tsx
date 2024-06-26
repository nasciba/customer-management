import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";
import { Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Button href="/">
            <Logo />
          </Button>
          <Typography
            fontFamily="'Lexend', Sans-serif"
            fontWeight={800}
            marginLeft="1.2em"
            padding="1em"
            variant="h6"
            color="#000000"
            sx={{ flexGrow: 1 }}
          >
            Customer Management
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
