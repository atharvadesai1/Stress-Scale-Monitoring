import React,{useState} from 'react'
import Layout from '../components/Layout'
import { dquestion } from './questions/Phq2Depressionq';
import Button from '@mui/material/Button';
import '../styles/Test.css'

let exportScore;

function Phq2DepressionTest() {
  const[selected,setSelected] = useState({
    q1:"",q2:""
  })

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
      let optionBox = dquestion[i].options
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
        <input type="radio" name={value['qno']} id="1" value="1" onChange={handleOnchange}/>
        <label htmlFor="1">{value['options'][1][0]}</label><br/>
        <input type="radio" name={value['qno']} id="2" value="2" onChange={handleOnchange}/>
        <label htmlFor="2">{value['options'][2][0]}</label><br/>
        <input type="radio" name={value['qno']} id="3" value="3" onChange={handleOnchange}/>
        <label htmlFor="3">{value['options'][3][0]}</label><br/>
        <input type="radio" name={value['qno']} id="4" value="4" onChange={handleOnchange}/>
        <label htmlFor="4">{value['options'][4][0]}</label><br/>
      </div>
    ) 
  }

  return (
    <div>
      <Layout>
        <div>
        <h2 className='hed'>Depression Test</h2>
          <div className="formcontainer">
            <form className='form'>
                <h2 className='subhead' style={{fontFamily:"serif"}}>Depression: PHQ2</h2>
                {dquestion.map(getquestion)} <br />                
                <Button variant="contained" color="primary" sx={{marginBottom:'15px', borderColor:'black'}} onClick={handleTrigger}>Submit</Button>
            </form>
           </div>
        </div>
      </Layout>
    </div>
  )
}

export {exportScore}
export default Phq2DepressionTest;
