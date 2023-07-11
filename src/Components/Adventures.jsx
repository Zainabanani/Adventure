import React from 'react';
import "../Styles/adventures.css";
import Adventure from './Adventure';
import Refresh from './Refesh';

const Adventures = ({adventures, removeAdventure, refresh}) => {
  if(adventures.length ===0){
    return <Refresh  refresh = {refresh}/>;
  }
  return (
    <div className='adventure-card'>
      
    {
      adventures.map((adventure) =>{
return (
  <Adventure 
  key={adventure.id} 
  {...adventure}
  removeAdventure={removeAdventure}
   />
)
      })}
    </div>
  );
};

export default Adventures