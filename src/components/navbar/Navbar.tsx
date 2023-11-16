import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LogoSvg from "./LogoSvg";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Button href="/">
            <LogoSvg />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
