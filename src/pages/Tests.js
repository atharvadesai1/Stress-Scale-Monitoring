import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles/Test.css'

function Tests() {
  return (
    <Layout>
      <div>
        <br /><br />
        <div className='head'>Select Diagnosis Test</div><br /><br />
        <Stack className='stack'>
        <Link to='/tests/stress'><Button variant="contained" color="success" sx={{width:'500px',padding:'20px',margin:'10px',fontSize:'20px',fontFamily:'Gill Sans'}}>Stress</Button></Link>
        <Link to='/tests/depression'><Button variant="contained" color="success" sx={{width:'500px',padding:'20px',margin:'10px',fontSize:'20px',fontFamily:'Gill Sans'}}>Depression</Button></Link>
        <Link to='/tests/anxiety'><Button variant="contained" color="success" sx={{width:'500px',padding:'20px',margin:'10px',fontSize:'20px',fontFamily:'Gill Sans'}}>Anxiety</Button></Link>
        </Stack>
      </div>

    </Layout>
  )
}

export default Tests
