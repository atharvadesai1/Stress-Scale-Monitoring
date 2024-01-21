import React from 'react'
import Layout from '../../components/Layout'
import '../../styles/Test.css'
// import {encryp} from '../StressTest'
// import {squestion} from "../../pages/questions/Stressq";
import { exportScore } from '../StressTest';

function StressScore() {

    return(
        <div>
            <Layout>
                <div className="scorecard">
                    <h1 className="hedg">Stress Score</h1>
                    <div className="scoredispplay">
                    <h2>Score: {exportScore}</h2>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default StressScore
