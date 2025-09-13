import React from 'react'
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, elements, plugins, registerables } from 'chart.js';

ChartJS.register(...registerables);
const ChartFinance = () => {
        const barChartData ={
    labels: ['Mon', 'Tus', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'school Finance',
        data: [1, 1, 4, 4, 5, 3, 31],
        backgroundColor : 'rgba(28, 165, 165, 1)',
        tension: 0.4,
      },
      {
        label:'last month',
        data:[1,2,3,4,5,50,40],
        backgroundColor : 'rgba(204, 53, 89, 1)',
        tension:0.4,
      }
    ],
  }
  const options = {
    responsive:true,
    maintainAspectRatio:false

  }
  return(
    <div className='w-full h-76 m-auto'>
        <Bar
            data={barChartData}
            options={options}
        ></Bar>
    </div>
  )
}

export default ChartFinance