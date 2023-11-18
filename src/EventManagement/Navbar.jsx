import React from "react";
import { AppBar, Box, Button } from "@mui/material";
import { Layout } from "lucide-react";
import {Link} from "react-router-dom";

//import SignUp from "./SignUp";
function Navbar() {
  return (
    <div>
      
      <AppBar
        position="static"
        style={{ backgroundColor: "lightgoldenrodyellow" }}
      >
      <Link to="">Navbar</Link>
      <Link to="/register">Regeister</Link>
       <Link to="Login">Login</Link> 
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button
            variant="outlined"
            style={{ color: "green", borderColor: "green" }}
          >
            LOGIN
          </Button>
          <Button variant="contained" color="success">
            SIGN UP
          </Button>
        </Box>
      </AppBar>
     
    </div>
  );
}
export default Navbar;