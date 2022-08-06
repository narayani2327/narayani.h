import React from "react";
import { Component } from "react"
import Footer from "./Footer";
import mypic from "../assets/my-photo.jpg";
class Home extends Component{
    render() {
        return (
            <div>
                <div id="home">
                    <img src={mypic} alt="My photo"></img>
                    <div className="text">
                        <h1>Hi 👋, I am Narayani H</h1>
                        <p>A student in sixth-semester computer science engineering at The National Institute of Engineering, Mysore, and a front-end web developer.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Home