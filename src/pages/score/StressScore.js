import React,{useState} from 'react'
import Layout from '../../components/Layout'
import '../../styles/Test.css'
import {encryp} from '../StressTest'
import {squestion} from "../../pages/questions/Stressq";

function StressScore() {
    const [sumArray,setSumArray] = useState([]);
    const [sum, setSum] = useState(0);
    let valuemj;

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

    function calculateScore(){
        const selected = encryp
        // console.log(selected)
        const objectLength = Object.entries(selected).length;
        // console.log(`objectLength ${objectLength}`)
        const valuesObject = Object.values(selected);
        for(let i=0;i<objectLength;i++){
            let optNum = valuesObject[i]
            let selectedOptNum = getInteger(optNum)
            // console.log(`Selected Number: ${selectedOptNum}`)
            let optionBox = squestion[i].options
            let valueAdded = optionBox[selectedOptNum][1]
            setSumArray(prevSumArray => [...prevSumArray, valueAdded]);
            setSum(prevSum => prevSum + valueAdded);
            // console.log(`Score at i=${i} is ${score}`)
        }
        // console.log(`Final Score: ${sum}`)
        console.log(`Sum array ${sumArray}`)
        return sum;

    }
    let finalAnswer = calculateScore();

    return(
        <div>
            <Layout>
                <div className="scorecard">
                    <h1 className="hedg">Stress Score</h1>
                    <div className="scoredispplay">
                    <h2>Score: {finalAnswer}</h2>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default StressScore
