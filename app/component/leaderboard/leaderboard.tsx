'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import LeaderboardRows from './leaderboardRows';
import Link from 'next/link';
import { Participant } from '../../types'
import { listenToParticipants } from '../../dbCalls'
import LeaderboardBubble from './leaderboardBubble';
import ScatterChart from '../leaderboard/leaderboardScatter'; 

const Leaderboard = () => {
  const [participants, setParticipants]= useState<Participant[]>([]);

  useEffect(() => {
    const unsubscribe = listenToParticipants((fetchedParticipants: Participant[]) => {
      setParticipants(fetchedParticipants);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sortMachine = (a: Participant, b: Participant) => {
    return b.score - a.score;
  }

  participants.sort(sortMachine);

  return (
    <React.Fragment>
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4">
          Leaderboard
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
  <p className="text-gray-700 text-base">
    Here are the top 5 players on the leaderboard
  </p>   
  <Link href="/forms" className='text-slate-400'>Add Participant
</Link>
</div>

        <div>
          {participants.map((participant, index) => (
            <LeaderboardRows
              key={index}
              id={participant.id}
              name={participant.name}
              score={participant.score}
            />
          ))}
         <LeaderboardBubble participants={participants} />
         <ScatterChart participants={participants}/>
         </div>
         </div>
    </React.Fragment>
  );
};

export default Leaderboard;
