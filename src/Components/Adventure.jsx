import React, {useState} from 'react'
 import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Adventure = ({id, image, info, title, removeAdventure}) => {
  const [readMore, setReadMore] = useState(true);
  const toggleRead = () => {
    setReadMore(!readMore)
  }
  return (
    <div className='maincard'>
    <img src={image} alt={title} className='photo'/>    
    <article>
        <div className='title-icons'>
<h5>{title}</h5>
        <p> <AiFillStar />  <AiFillStar />    <AiFillStar /> < AiOutlineStar/>  < AiOutlineStar/> </p>
        </div>
       <p className='adventure-text'>
        {readMore ? `${info.substring(0, 50)}...` : info}
        <button onClick={toggleRead}>{readMore ? 'Read More': 'show Less'}</button>
        </p> 
    </article>
    <button className='notbtn' onClick={() => removeAdventure(id)}>Not Interested</button>
    </div>
  );
};

export default Adventure