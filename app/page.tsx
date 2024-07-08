
import React from "react";
import Leaderboard from "./component/leaderboard/leaderboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Leaderboard />
    </main>
  );
}
