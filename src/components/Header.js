import React from 'react'
import {Box, AppBar, Toolbar} from '@mui/material'
import { Link } from 'react-router-dom'
import '../styles/Header.css';


function Header() {
  return (
    <>
      <Box>
        <AppBar component='nav' sx={{bgcolor:'#5D5B5A'}}>
          <Toolbar>
            <Box sx={{display: {xs:'none', sm:'block'}}}>
              <ul className='navigation_bar'>
                <li>
                  <Link to={'/'}>HOME</Link>
                </li>
                <li>
                  <Link to={'/about'}>ABOUT</Link>
                </li>
                <li>
                  <Link to={'/tests'}>TESTS</Link>
                </li>
                <li>
                  <Link to={'/contact'}>CONTACT</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
