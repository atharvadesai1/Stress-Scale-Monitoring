import React, {useState} from 'react'
import Layout from '../components/Layout'
import {squestion} from "../pages/questions/Stressq";
import Button from '@mui/material/Button';
import '../styles/Test.css'
import { Link } from 'react-router-dom'
// import StressScore from './score/StressScore'

// let finalScore;
var encryp = {}

const StressTest = ()=> {
  const[selected,setSelected] = useState({
    q1:"",q2:"",q3:"",q4:"",q5:"",
    q6:"",q7:"",q8:"",q9:"",q10:""
  })
  // const[trigger,setTrigger] = useState(0)
  // const [score,setScore] = useState(0);

  const handleTrigger = ()=>{
    encryp = selected
  }

  const handleOnchange = (e)=>{
    setSelected(()=>({
      ...selected, [e.target.name]:e.target.value
    }))
  }
  console.log(selected);

  const getquestion = (value)=>{
    return (
      <div>
        <h4>{value['que']}</h4>
        <input type="radio" name={value["qno"]} id="1" value="1" onChange={handleOnchange}/>
        <label htmlFor="1">{value['options'][1][0]}</label><br/>
        <input type="radio" name={value["qno"]} id="2" value="2" onChange={handleOnchange}/>
        <label htmlFor="2">{value['options'][2][0]}</label><br/>
        <input type="radio" name={value["qno"]} id="3" value="3" onChange={handleOnchange}/>
        <label htmlFor="3">{value['options'][3][0]}</label><br/>
        <input type="radio" name={value["qno"]} id="4" value="4" onChange={handleOnchange}/>
        <label htmlFor="4">{value['options'][4][0]}</label><br/>
        <input type="radio" name={value["qno"]} id="5" value="5" onChange={handleOnchange}/>
        <label htmlFor="5">{value['options'][5][0]}</label><br/>
      </div>
    )
  }

  return (
    <div>
      <Layout>
        <div>
        <h2 className='hed'>Stress Test</h2>
          <div className="formcontainer">
            <form className='form'>
                {squestion.map(getquestion)} <br />
                {/* {trigger===1?<StressScore selec={selected}/>:""}   */}
                <Link to='/tests/stressscore'>
                <Button variant="contained" color="primary" type='submit' sx={{marginBottom:'15px', borderColor:'black'}} onClick={handleTrigger}>Submit</Button> 
                </Link>    
            </form>
           </div>
        </div>
      </Layout>
    </div>
  )
}

export {encryp}
export default StressTest

