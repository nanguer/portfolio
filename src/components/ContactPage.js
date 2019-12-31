import React from 'react';
import {FaAngleDown} from 'react-icons/fa';
import {animateContactScroll} from './Animations';
import gsap from "gsap";
import ScrollToPlugin  from "gsap/ScrollToPlugin";
import {FaPhone, FaCode} from 'react-icons/fa'
import {MdEmail, MdLocationOn} from 'react-icons/md';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";


export default () => {

gsap.registerPlugin(ScrollToPlugin);

const handleScrollDown = (anchor) => {
    animateContactScroll(anchor)
}  

const contacSectionIcons = [
    {Icon: FaPhone, name: 'phone', text: '+48 789397113' },
    {Icon: MdEmail, name: 'email', text: 'mynew@email.com' },
    {Icon: MdLocationOn, name: 'location', text: 'I live in Sopot, north of Poland' },
    {Icon: FaCode, name: 'work', text: 'Available for freelance hire' }
]

const iconColor = "#5158bb";
const iconSize = "3em";

const socialIcons = [
    {Icon: FaInstagram, name:"instagram"},
    {Icon: FaLinkedinIn, name:"linkedIn"},
    {Icon: FaGithub, name:"github"},

]

 return (
    <div className="contact-container" style={{height: "200vh",
    display: "flex",
    flexDirection:"column",
    padding: "2rem 1rem"
}}>
    <div className="contact-up" style={{height: "50%", zIndex:'2'}}>
        <div className="container" style={{padding:"30vh 4vw"}}>
            <h1 className="contact-title">Contact</h1>
            <p>Feel free to reach out to discuss ideas, projects, or anything   !</p>

        </div>
        <div className="arrow-container d-inline-flex justify-content-end pr-md-5" onClick={()=>handleScrollDown('#contact-down')}>
        <FaAngleDown
            size="2em"
        />
        </div>
        
    </div>
    <div className="container contact-down d-flex flex-column justify-content-between" id="contact-down" style={{height: '50%'}}>
        <div className="pt-4">
            <h3 className="contact-title">Contact Info</h3>
        </div>
        <div className="contact-sections d-flex flex-wrap">
            {contacSectionIcons.map(({Icon, name, text})=>(
                <div key={name} className="col-12 col-md-6 text-center d-flex flex-column-reverse p-4">
                    <div style={{padding:"1rem"}}>{text}</div>
                    <div>
                    <Icon size={iconSize} color={iconColor}/>
                    </div>
            </div>
            ))}
        </div>
        <div className="contact-social-icons d-flex justify-content-center">
            {socialIcons.map(({Icon, name})=>(
                <div key={name} className="pr-2" style={{zIndex:"2", cursor:'pointer'}}>
                    <Icon key={name} size="1.5em" color="#fff" />
                </div>
            ))}
        </div>
    </div>
    </div>
 )   

}
