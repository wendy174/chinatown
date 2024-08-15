import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography color='inherit' component="div">
            CHINATOWN
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Home</Button>
          <Button color="inherit">Menu</Button>
          <Button color="inherit">Order Online</Button>
          <Button color="inherit">About us</Button>
          <Button color="inherit">Contact</Button>        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
