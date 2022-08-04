import React from "react";
import { Component } from "react";
import resume from "../assets/Narayani H.pdf";
import { BsFillFilePdfFill , BsInstagram , BsFacebook, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <ul>
                    <li><a href={resume} target="_blank"><BsFillFilePdfFill/></a></li>
                    <li><a href="https://www.facebook.com/hari.kala.167" target="_blank"><BsFacebook/></a></li>
                    <li><a href="https://www.instagram.com/harikala_bhat/" target="_blank"><BsInstagram/></a></li>
                    <li><a href="https://www.linkedin.com/in/narayani2327/" target="_blank"><BsLinkedin/></a></li>
                    <li><a href="mailto:narayani.h23@gmail.com" target="_blank"><IoMdMail/></a></li>
                </ul>
                <p>@ Narayani H. All rights reserved</p>
            </div>
        )
    }
}
export default Footer;