import React from 'react'
import Layout from '../../components/Layout';
// import { BarChart } from '@mui/x-charts/BarChart';
import '../../styles/Test.css';
import { exportScore } from '../Phq9DepressionTest';
// import { PieChart} from '@mui/x-charts/PieChart';

function DepressionScore() {
let depressionType;
// const MAX_SCORE = 27
// const exportNoScore = MAX_SCORE-exportScore 
const  depressionSeverity = ['None-minimal','Mild','Moderate','Moderately Severe','Severe']

if (exportScore>=0 && exportScore<=4) {
    depressionType = depressionSeverity[0];
} else if (exportScore>=5 && exportScore<=9) {
    depressionType = depressionSeverity[1];
} else if (exportScore>=10 && exportScore<=14) {
    depressionType = depressionSeverity[2];
} else if (exportScore>=15 && exportScore<=19) {
    depressionType = depressionSeverity[3];
} else if (exportScore>=20 && exportScore<=27) {
    depressionType = depressionSeverity[4];
}


  return (
    <div>
      <Layout>
        <div className="scorecard">
          <h1 className="hedg">Depression Score</h1>
          <div className="scoredispplay">
            <h2>Your PHQ9 Score: {exportScore}</h2>
            <h2>Depression Severity: {depressionType}</h2>
          </div>
          <div className="graphs">
            <div className="scoreshow">
            </div>
            <div className="scaleshow">
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default DepressionScore
