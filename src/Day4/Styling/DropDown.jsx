import * as React from 'react';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { KeyboardArrowDown } from '@mui/icons-material';

export default function BasicMenu() {
    const [anchorEl,setAnchorEl]=React.useState(null);
    const open =Boolean (anchorEl);
    const handleClick=(event)=>{
        setAnchorEl(event.currentTarget);
    };
  return (
    <div>
       <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
        endIcon={<KeyboardArrowDown />}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClick}>Profile</MenuItem>
        <MenuItem onClick={handleClick}>My account</MenuItem>
        <MenuItem onClick={handleClick}>Logout</MenuItem>
      </Menu>
    </div>
  )
}