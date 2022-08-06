import React from 'react';
import { Component } from 'react';
import {Link} from "react-router-dom";
class Navbar extends Component{
    render() {
        return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <Link  className="navbar-brand" to="/">Narayani</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: '100px'}}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/narayani.h">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/narayani.h/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/narayani.h/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/narayani.h/project">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/narayani.h/education">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/narayani.h/contacts">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}
export default Navbar;