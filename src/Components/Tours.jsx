import React from "react";
import "../Styles/tours.css";
import tours from '../assets/tours.png'

const Tours = () => {
  return (
    <div className="tour">
      <div className="tours">
        <div className="oga">
<h1 className="mkt">Making adventure tours,  activities affordable.</h1>
        <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor cursus
          tortor tempus ac. Purus amet risus amet sagittis. Enim nulla a sapien
          lectus tellus mauris integer ut. Magna viverra sit rhoncus convallis
          id. Aenean egestas turpis aenean feugiat pharetra sed sed morbi
          faucibus.
        </p>
        </div> 
      </div>
      <div><img src={tours} alt={'tour'} className="hoto"/></div>
    </div>
  );
};

export default Tours;
