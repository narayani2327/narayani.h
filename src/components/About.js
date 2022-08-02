import React from "react";
import { Component } from "react";
import Navbar from "./Navbar";
class About extends Component{
    render(){
        return(
            <>
                <Navbar/>
                <div className="about-main">
                    <h3>About Me</h3>
                    <div className="child">
                        <div className="about">
                            <p>I am a quick learner, a good communicator, and a team leader. I am interested in learning new skills and building projects on them. Fluent in Kannada, English, Hindi, and Tuli. My hobbies are drawing, painting and listening to music.</p>
                            <a href="#">Download Resume</a>
                        </div>
                        <div className="personal-info">
                            <p><span>Name: </span>Narayani H</p>
                            <p><span>Age: </span>21</p>
                            <p><span>Phone Number: </span>7022442069</p>
                            <p><span>Email: </span>narayani.h23@gmail.com</p>
                            <p><span>Nationality: </span>Indian</p>
                            <p><span>Languages: </span>English, Tulu, Kannada, Hindi</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default About;