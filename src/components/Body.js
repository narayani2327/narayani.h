import React from "react";
import { Component } from "react";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Footer from "./Footer";
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
                <About/>
                <div id="skill">
                    <h3>Skills</h3>
                    <Skills/>
                </div>
                <div id="project">
                    <h3>Projects</h3>
                    <Project/>
                </div>
                <div id="experience">
                    <h3>Experience</h3>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Home