import * as React from 'react';
import {AppBar,Box, Toolbar,Typography,Menu,Container,Button,MenuItem}from '@mui/material';
// import { Link } from 'react-router-dom';
//import Login from './Login';

const pages = ['Home','About', 'Events' ,'Pricing','Jobs+'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" style={{backgroundColor:'cyan'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'green',
            }}
          >
            EventsHub!
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            </Box>
            <Box display="flex" justifyContent="flex-end" alignItems="center"  sx={{ flexGrow: 1}}>
            <Button variant="outlined" style={{ backgroundColor: "white" ,color:"green"}}>
              LOGIN
            </Button>
            </Box>
            <Box display="flex" justifyContent="flex-end" alignItems="center"  sx={{ flexGrow: 0}}>
            <Button variant="contained" color="success">
            SIGN UP
            </Button>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;