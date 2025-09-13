import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, elements, plugins, registerables } from 'chart.js';

ChartJS.register(...registerables);

const ChartPerform = () => {
  const data = {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
    datasets: [
      {
        label: 'school perform',
        data: [1, 1, 4, 4, 5, 3, 31],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      },
      {
        label:'last month',
        data:[1,2,3,4,5,50,40],
        borderColor: 'rgba(156, 12, 46, 1)',
        tension:0.4,
      }
    ],
   
  };
  const options = {
    responsive:true,
    maintainAspectRatio:false

  }
  return (
    <div className='w-9/10 h-76 m-auto'>
      <h2>School Performance</h2>
      <Line className='nm-auto' data={data} options={options}/>
    </div>
  );
};

export default ChartPerform;