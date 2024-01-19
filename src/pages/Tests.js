import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Tests() {
  return (
    <Layout>
      <div>
        <br /><br /><br /><br /><br /><br />
        <h1>Select Diagnosis Test</h1>
        <Stack direction="column" spacing={2}>
        <Link to='/tests/stress'><Button variant="contained" color="success">Stress</Button></Link>
        <Link to='/tests/depression'><Button variant="contained" color="success">Depression</Button></Link>
        <Link to='/tests/anxiety'><Button variant="contained" color="success">Anxiety</Button></Link>
        </Stack>
      </div>

    </Layout>
  )
}

export default Tests
