import React from 'react'
import Layout from '../components/Layout'
import '../styles/Home.css'
import ImageCenter from '../images/bag3.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Home() {
  return (
    <Layout>
        <div>
        <div className='imagecenter' style={{backgroundImage:`url(${ImageCenter})`}}>
          <div className="greenbox">       
          </div>
          <div className="forminfo">
              <h1>Twitter Information</h1>
              <form action="">
                <Box className='formp' component="form" sx={{'& .MuiTextField-root': { ml:3,mr:3,mt:2,mb:2, width: '35ch' },}} noValidate autoComplete="off">
                    <TextField required id="outlined-basic" label="Full Name" variant="outlined" /><br />
                    <TextField required id="outlined-basic" label="Email ID" variant="outlined" type='email' /><br />
                    <TextField required id="outlined-basic" label="Twitter ID" variant="outlined" /><br />
                    <TextField required id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/><br />
                </Box><br />
                <Button variant="contained" color="secondary" type='submit' sx={{marginBottom:'15px', borderColor:'black'}}>Submit</Button>
              </form>
            </div> 
        </div>
        </div>
    </Layout>
  )
}

export default Home;
