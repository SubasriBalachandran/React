import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Paper
      style={{
        padding: 10,
        maxWidth: 400,
        margin: "auto",
        marginTop: 150,
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUdr6Ljyy6aijS_ZxyhJTOL-kq1LNbSEDZQ&usqp=CAU")',
      }}
    >
      <div>
        <center>
          {" "}
          <Typography component="h3" variant="h3">
            USER LOGIN
          </Typography>
          <p>Please login to continue</p>
        </center>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button variant="contained" style={{ backgroundColor: "black" }}>
              LOGIN
            </Button>
          </Box>
        </form>
      </div>
    </Paper>
  );
};

export default Login;