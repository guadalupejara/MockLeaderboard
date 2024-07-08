import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration, ChartTypeRegistry } from 'chart.js/auto'; // Import Chart.js and typings

import { Participant } from '@/app/types'; // Adjust the import path based on your actual types

type ScatterChartProps = {
  participants: Participant[];
};

const ScatterChart: React.FC<ScatterChartProps> = ({ participants }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<keyof ChartTypeRegistry, { x: number; y: number; }[], unknown> | null>(null); // Specify Chart type

  useEffect(() => {
    const generateDataset = (participants: Participant[]) => {
      return participants.map(participant => ({
        label: participant.name,
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // You can customize colors dynamically if needed
        data: [{
          x: participant.score,
          y: Math.random() * 10, // Example: Use random y-values for demonstration
        }]
      }));
    };

    // Chart configuration
    const config: ChartConfiguration<'scatter', { x: number; y: number; }[], unknown> = {
      type: 'scatter',
      data: {
        datasets: generateDataset(participants)
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    };

    // Ensure chart instance is destroyed before recreating
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current?.getContext('2d');
    if (myChartRef && participants.length > 0) {
      chartInstance.current = new Chart(myChartRef, config);
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [participants]);

  return (
    <div>
      <h1>Hello Scatter Chart</h1>
      <div>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default ScatterChart;

