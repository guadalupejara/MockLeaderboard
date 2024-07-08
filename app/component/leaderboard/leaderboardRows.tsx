'use client'
import React from 'react';
import './learderboard.css';
import { LeaderboardRowsProps } from '../../types'
import { deleteParticipant } from '../../dbCalls'


const LeaderboardRows: React.FC<LeaderboardRowsProps> = ({ name, score, id }) => {
    const handleDelete = async (id: string) => {
        console.log('Prepare to delete data:', id);
        deleteParticipant(id)
      };
      

  return (
    <React.Fragment>
      <div className='card flex justify-between items-center'>
        <p>{name}</p>
        <div className="score-delete-container flex items-center">
          <p>Score: {score}</p>
          <button className='ml-4 text-slate-400' onClick={()=>handleDelete(id)}>x</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeaderboardRows;