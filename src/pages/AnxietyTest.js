import React from 'react'
import Layout from '../components/Layout'
import {aquestion} from "../pages/questions/Anxietyq";
import Button from '@mui/material/Button';
import '../styles/Test.css'


function AnxietyTest() {
  const getquestion = (value)=>{
    return (
      <div>
        <h4>{value['que']}</h4>
        <input type="radio" name="opta" id="a" />
        <label htmlFor="a">{value['opta'][0]}</label><br/>
        <input type="radio" name="optb" id="b"/>
        <label htmlFor="b">{value['optb'][0]}</label><br/>
        <input type="radio" name="optc" id="c" />
        <label htmlFor="c">{value['optc'][0]}</label><br/>
        <input type="radio" name="optd" id="d" />
        <label htmlFor="d">{value['optd'][0]}</label><br/>
      </div>
    )
  }

  return (
    <div>
      <Layout>
        <div>
        <h2 className='hed'>Anxiety Test</h2>
          <div className="formcontainer">
            <form action="" className='form'>
                <h2 className='subhead' style={{fontFamily:"serif"}}>Anxiety: GAD-2</h2>
                {aquestion.map(getquestion)} <br />
                <Button variant="contained" color="primary" type='submit' sx={{marginBottom:'15px', borderColor:'black'}}>Submit</Button>
            </form>
           </div>
        </div>
      </Layout>
    </div>
  )
}

export default AnxietyTest
