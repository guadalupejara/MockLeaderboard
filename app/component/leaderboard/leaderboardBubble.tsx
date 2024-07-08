import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Participant } from '@/app/types'; // Adjust the import path based on your actual types

type LeaderboardBubbleProps = {
  participants: Participant[];
};

const LeaderboardBubble: React.FC<LeaderboardBubbleProps> = ({ participants }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    const generateDataset = (participants: Participant[]) => {
      return participants.map(participant => ({
        label: participant.name,
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // You can customize colors dynamically if needed
        data: [{
          x: participant.score,
          y: 0, // Placeholder for position on the leaderboard (adjust according to your data)
          r: Math.sqrt(participant.score) * 10 // Adjust the radius size according to your data
        }]
      }));
    };

    // Ensure chart instance is destroyed before recreating
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current?.getContext('2d');
    if (myChartRef && participants.length > 0) {
      chartInstance.current = new Chart(myChartRef, {
        type: 'bubble',
        data: {
          datasets: generateDataset(participants)
        },
        options: {
          scales: {
            y: {
              title: {
                display: true,
                text: 'Position' // Adjust label as needed
              },
              ticks: {
                stepSize: 1
              }
            },
            x: {
              title: {
                display: true,
                text: 'Score' // Adjust label as needed
              }
            }
          }
        }
      });
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
      <h1>Hello Bubble Chart</h1>
      <div>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default LeaderboardBubble;
