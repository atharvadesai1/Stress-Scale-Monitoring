import React from 'react'
import Layout from '../components/Layout'
import {squestion} from "../pages/questions/Stressq";
import Button from '@mui/material/Button';
import '../styles/Test.css'


function StressTest() {
  const getquestion = (value)=>{
    return (
      <div>
        <h4>{value['que']}</h4>
        <input type="radio" name="opta" id="a" />
        <label htmlFor="a">{value['opta']}</label><br/>
        <input type="radio" name="optb" id="b"/>
        <label htmlFor="b">{value['optb']}</label><br/>
        <input type="radio" name="optc" id="c" />
        <label htmlFor="c">{value['optc']}</label><br/>
        <input type="radio" name="optd" id="d" />
        <label htmlFor="d">{value['optd']}</label><br/>
        <input type="radio" name="opte" id="e" />
        <label htmlFor="e">{value['opte']}</label><br/>
      </div>
    )
  }

  return (
    <div>
      <Layout>
        <div>
        <h2 className='hed'>Stress Test</h2>
          <div className="formcontainer">
            <form action="" className='form'>
                {squestion.map(getquestion)} <br />
                
                <Button variant="contained" color="primary" type='submit' sx={{marginBottom:'15px', borderColor:'black'}}>Submit</Button>
            </form>
           </div>
        </div>
      </Layout>
    </div>
  )
}

export default StressTest
