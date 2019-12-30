import React from 'react';
import {FaAngleDown} from 'react-icons/fa';
import {animateContactScroll} from './Animations';
import gsap from "gsap";
import ScrollToPlugin  from "gsap/ScrollToPlugin";

export default () => {

gsap.registerPlugin(ScrollToPlugin);

const handleScrollDown = (anchor) => {
    animateContactScroll(anchor)
}  

 return (
    <div className="contact-container" style={{height: "200vh",
    display: "flex",
    flexDirection:"column",
    padding: "2rem 1rem"
}}>
    <div className="contact-up" style={{height: "50%", zIndex:'2'}}>
        <div className="container" style={{padding:"30vh 4vw"}}>
            <h1 className="contact-title">Contact</h1>
            <p>Feel free to reach out to discuss your idea!</p>

        </div>
        <div className="arrow-container d-inline-flex justify-content-end pr-md-5" onClick={()=>handleScrollDown('#contact-down')}>
        <FaAngleDown
            size="2em"
        />
        </div>
        
    </div>
    <div className="contact-down" id="contact-down" style={{height: '50%'}}>
    contact page 2
    </div>
    </div>
 )   

}
