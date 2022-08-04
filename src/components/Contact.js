import {Component} from "react";
import File from "../assets/Narayani H.pdf";
import { BsFillFilePdfFill , BsInstagram , BsFacebook, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
class Contact extends Component {
    render() { 
        return (
            <div className="contact">
                <ul>
                    <li><a href="tel:7022442069" target="_blank"><BsFillTelephoneFill/><span> Phone No.</span></a></li>
                    <li><a href="mailto:narayani.h23@gmail.com" target="_blank"><IoMdMail/><span> Email</span></a></li>
                    <li><a href={File} target="_blank"><BsFillFilePdfFill/><span> Resume</span></a></li>
                    <li><a href="https://www.facebook.com/hari.kala.167" target="_blank"><BsFacebook/><span> Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/harikala_bhat/" target="_blank"><BsInstagram/><span> Instagram</span></a></li>
                    <li><a href="https://www.linkedin.com/in/narayani2327/" target="_blank"><BsLinkedin/><span> Linkedin</span></a></li>
                </ul>
            </div>
        );
    }
}
 
export default Contact;