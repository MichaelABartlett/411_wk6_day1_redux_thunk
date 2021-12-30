import React from 'react';
import { useState, useEffect } from "react"

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { MoreVert } from '@material-ui/icons';




export function SimpleMenu(props, idx) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {<MoreVert/>}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => props.deleteMake(idx)}>Delete this car, it is not a truck so it need to go</MenuItem>
        <MenuItem onClick={() => console.log(props.makes)}>Using to console.log props.makes or whatever I need</MenuItem>
      </Menu>
    </div>
  );
}
