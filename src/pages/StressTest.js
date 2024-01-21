import React, {useState} from 'react'
import Layout from '../components/Layout'
import {squestion} from "../pages/questions/Stressq";
import Button from '@mui/material/Button';
import '../styles/Test.css'
import { Link } from 'react-router-dom'
// import StressScore from './score/StressScore'

// let finalScore;
// var encryp = {}
let exportScore;

const StressTest = ()=> {
  const[selected,setSelected] = useState({
    q1:"",q2:"",q3:"",q4:"",q5:"",
    q6:"",q7:"",q8:"",q9:"",q10:""
  })
  // const[trigger,setTrigger] = useState(0)
  const [score,setScore] = useState(0);
  let totalScore = 0

  const getInteger = (valueN)=>{
    if(valueN==="1"){
        return 1;
    }
    else if(valueN==="2"){
        return 2;
    }
    else if(valueN==="3"){
        return 3;
    }
    else if(valueN==="4"){
        return 4;
    }
    else if(valueN==="5"){
        return 5;
    }
    else{
        return 0
    }
  } 

  const handleTrigger = ()=>{
    console.log(`Selected ${selected}`)
    const objectLength = Object.entries(selected).length;
    const valuesObject = Object.values(selected);
    for(let i=0;i<objectLength;i++){
      let optNum = valuesObject[i]
      let selectedOptNum = getInteger(optNum)
      let optionBox = squestion[i].options
      let valueAdded = optionBox[selectedOptNum][1]
      console.log(`Value Added ${valueAdded}`)
      totalScore+=valueAdded;
    }
    console.log(`total score ${totalScore}`)
    exportScore = totalScore;
    setScore((prevScore)=>prevScore+totalScore)
    console.log(`Final Score: ${score}`)
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
                <Button variant="contained" color="primary" sx={{marginBottom:'15px', borderColor:'black'}} onClick={handleTrigger}>Submit</Button> 
                </Link>    
            </form>
           </div>
        </div>
      </Layout>
    </div>
  )
}

export {exportScore}
export default StressTest

