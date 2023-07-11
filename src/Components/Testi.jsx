import React, {useState} from "react";
import "../Styles/testi.css"
import clients from '../user';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

 const Testimonial = () => {
    const [index, setindex] = useState (0);
    const {id, comment, image, name, job} = clients [index];


    const checkNumber = (num) =>{
        if (num > clients.length - 1) {
return 0;
        }
        if (num < 0) {
            return clients.length - 1;

        }
        return num;
    }

    //prev
    const prevPerson = () =>{
        setindex ((index) =>{
            return checkNumber (index - 1);
        });
    };

    //next
     const nextPerson = () =>{
        setindex ((index) =>{
            return checkNumber (index + 1);
        });
    };
return (
<div className="testimonial">
<h4>Clients Testimonial</h4>
<h2>Adventure Talks</h2>
<div className="testimonial-main">
    <img src={image} alt={name}/>
    <p>{comment}</p>

    <div className="btn-container">
        <button onClick={prevPerson}><BsArrowLeft /></button>
        <button onClick={nextPerson}><BsArrowRight /></button>
    </div>
    <h1> {name} </h1>
    <h3> {job} </h3>
</div>
</div>
);
};

export default Testimonial;

