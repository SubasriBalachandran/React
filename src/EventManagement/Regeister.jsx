import React from 'react'
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Regeister() {
  return (
    <div>
        <Container ><center>
        <Grid marginTop={25}  marginLeft={10} marginRight={10}  marginBottom={25} >
            <Paper style={{backgroundColor:"lightblue"}} >
            <br></br>
        <br></br>
            <h2><strong>Sign Up</strong></h2>
        <label for="name"></label>
        <input id="name" type="box" placeholder="Enter Your Name"></input>
        <br></br>
        <br></br>
        <label for="email"></label>
        <input id="email" type="textarea" placeholder="Enter your Email ID"></input>
        <br></br>
        <br></br>
        <label for="na"></label>
        <input id="na" type="password" placeholder="Password"></input>
        <br></br>
        <br></br>
        <label for="n"></label>
        <input id="n" type="password" placeholder="Confirm Password"></input>
        <br></br>
        <br></br>
        <button>Register</button>
        <br></br>
        <br></br>
        <p>Already have an account?<Button href="#####">Sign in</Button></p>
        <br></br>
        <br></br></Paper></Grid></center>
        </Container>

    </div>
  )
}

export default Regeister