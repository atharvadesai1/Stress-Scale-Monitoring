import React from 'react'
import Layout from '../components/Layout'
import {aquestion} from "../pages/questions/Anxietyq";
import Button from '@mui/material/Button';


function AnxietyTest() {
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
      </div>
    )
  }

  return (
    <div>
      <Layout>
        <div>
        <br /><br /><br /><br /><br /><br />
            <h1>Anxiety Test</h1>
           <form action="">
              {aquestion.map(getquestion)} <br />
              <Button variant="contained" color="primary" type='submit'>Submit</Button>
           </form>
        </div>
      </Layout>
    </div>
  )
}

export default AnxietyTest
