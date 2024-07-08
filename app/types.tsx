export type Participant = {
    id:string;
    name: string;
    score: number;
  };

  export type LeaderboardRowsProps = {
    key: number;
    id: string;
    name: string;
    score: number;
};

export type LeaderboardBubbleProps = {
  key: number;
  id: string;
  name: string;
  score: number;
}
  
export type newParticipant = {
    name: string;
    is_user: boolean;
    photo: string;
  };

export type quiz = {

  experience_points: number;
  category: string;
  quiz_name: string;
  quiz_points: number;
}