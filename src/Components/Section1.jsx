import React, {useState} from 'react';
import '../Styles/section1.css';
import data from '../data';
import Adventures from './Adventures';

const Section1 = () => {
    const [adventures, setAdventures] =useState(data);

    //remove adv function
    const removeAdventure =(id) =>{
      const remainingAdventures = adventures.filter((a) => a.id !==id);
      setAdventures(remainingAdventures);
    };
    //refresh function
    const refresh = () => {
      setAdventures (data);
    }
  return (
    <div className='section1'>
         <div className='sec1-heading'>
            <h2 className='Take'>Take Yourself</h2>
         <h2 className='ideas'>Adventure Ideas</h2>
         </div>
         <div>
<Adventures 
adventures={adventures} 
removeAdventure ={removeAdventure}
refresh ={refresh} />
         </div>
    </div>
  );
};

export default Section1