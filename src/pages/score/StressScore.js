import React from 'react';
import Layout from '../../components/Layout';
import { BarChart } from '@mui/x-charts/BarChart';
import '../../styles/Test.css';
import { exportScore } from '../StressTest';
import { PieChart} from '@mui/x-charts/PieChart';

function StressScore() {
    let stressType;
    const MAX_SCORE = 40
    const exportNoScore = MAX_SCORE-exportScore 
    if (exportScore <= 13) {
    stressType = "Low Stress";
    } else if (exportScore >= 14 && exportScore <= 26) {
    stressType = "Moderate Stress";
    } else if (exportScore >= 28 && exportScore <= 40) {
    stressType = "High Stress";
    }

    const low = {
    data: [13],
    label: 'Low',
    };
    const moderate = {
    data: [13],
    label: 'Moderate',
    };
    const high = {
    data: [13],
    label: 'High',
    };

    const data = [
        { label: 'Stress', value: exportScore, color: '#F82B37' },
        { label: 'Calm', value: exportNoScore, color: '#6CF82B' }
    ];
    const sizing = {
        margin: { right: 5 },
        width: 180,
        height: 180,
        legend: { hidden: true }
    };
    const mizing = {
        width: 280,
        height: 250
    };
    //hi

  return (
    <div>
      <Layout>
        <div className="scorecard">
          <h1 className="hedg">Stress Score</h1>
          <div className="scoredispplay">
            <h2>Your Score: {exportScore}</h2>
            <h2>Level: {stressType}</h2>
          </div>
          <div className="graphs">
            <div className="scoreshow">
            <PieChart
                series={[
                    {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                ]}
                {...sizing}
            />
            </div>
            <div className="scaleshow">
                <BarChart
                    {...mizing}
                    series={[
                        { ...low, stack: 'total' },
                        { ...moderate, stack: 'total' },
                        { ...high, stack: 'total' },
                    ]}
                    sx={{marginLeft:5}}
                />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default StressScore;
