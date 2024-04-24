'use client'
import Chart from 'chart.js/auto';
import {Bar, Doughnut, Line} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import sourceData from '../data/sourceData.json';
import Header from '../components/header/page';

const Charts = () => {
  Chart.register(CategoryScale);
  
  return (
    <>
      <Header headerLeft='Portfolio' headerMiddle='Charts' headerRight='Dashbaord'/>
      <div></div>
      <div>
        <Bar 
          data={{
            labels: sourceData.map((data) => data.label), 
            datasets: [
              {
                label: 'Count',
                data: sourceData.map((data) => data.value),
              },
            ],
        }}/>
      </div>
      <div>
      <Doughnut 
          data={{
            labels: sourceData.map((data) => data.label), 
            datasets: [
              {
                label: 'Count',
                data: sourceData.map((data) => data.value),
              },
            ],
        }}/>
      </div>
    </>
  );
}

export default Charts