import React from "react";
import { Component } from "react";
import Project from "./Project";
import mypic from "../assets/my-photo.jpg";
class Home extends Component{
    render() {
        return (
            <div>
                <div id="home">
                    <img src={mypic} alt="My photo"></img>
                    <div className="text">
                        <h2>Hi 👋, I am Narayani H</h2>
                        <p>A student in sixth-semester computer science engineering at The National Institute of Engineering, Mysore, and a front-end web developer.</p>
                    </div>
                </div>
                <div id="about">
                    <h3>About Me</h3>
                    <img src={mypic}></img>
                    <p>I am a quick learner, a good communicator, and a team leader. I am interested in learning new skills and building projects on them. Fluent in Kannada, English, Hindi, and Tuli. </p>
                </div>
                <div id="skill">
                    <h3>Skills</h3>
                </div>
                <div id="project">
                    <h3>Projects</h3>
                    <div className="pro">
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/>
                    </div>
                </div>
                <div id="experience">
                    <h3>Experience</h3>
                </div>
                <div id="footer">
                    <h3>Experience</h3>
                </div>
            </div>
        );
    }
}
export default Home