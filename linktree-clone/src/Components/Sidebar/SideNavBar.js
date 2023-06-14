import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import BasicSpeedDial from './SpeedDial';
import './SideNavBar.css';


function SideNavBar() {
  return (
    <div className='sideNavBar'>
      <div className='content'>
        <div>hello</div>
      </div>
      <div className='sidenav'>
        <div className='conatiner mb-3'>
        <Stack direction="column" spacing={0}>   
        <BasicSpeedDial className='ml-2'/>
        <Avatar className='ml-1' alt="Remy Sharp" src="" sx={{ width: 52, height: 52, marginTop: 0}} />
        </Stack>
        </div>        
      </div>
    </div>
  );
}

export default SideNavBar;
