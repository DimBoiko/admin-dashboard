import React, { useRef, useEffect } from 'react';
import {Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import './eventchart.css'

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const dataSetOne = [100,-180,200,-100,200]
const dataSetTwo =  [100,-200,500,100,200]
const dataSetThree =  [200,500,100,-120,260]
export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: labels.map((e,index) => dataSetOne[index]),
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map((e,index) => dataSetTwo[index]),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map((e,index) => dataSetThree[index]),
    },
  ],
};

function triggerTooltip(chart) {
  const tooltip = chart?.tooltip;

  if (!tooltip) {
    return;
  }

  if (tooltip.getActiveElements().length > 0) {
    tooltip.setActiveElements([], { x: 0, y: 0 });
  } else {
    const { chartArea } = chart;

    tooltip.setActiveElements(
      [
        {
          datasetIndex: 0,
          index: 2,
        },
        {
          datasetIndex: 1,
          index: 2,
        },
      ],
      {
        x: (chartArea.left + chartArea.right) / 2,
        y: (chartArea.top + chartArea.bottom) / 2,
      }
    );
  }

  chart.update();
}

 function EventChart() {
  const chartRef = useRef(ChartJS);
  useEffect(() => {
    const chart = chartRef.current;
    triggerTooltip(chart);
  }, []);

  return <div className='eventchart'><Chart ref={chartRef} type='bar' data={data}/></div>;
}
export default EventChart