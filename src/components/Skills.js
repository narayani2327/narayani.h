import { Component } from "react";
import SubSkill from "./SubSkill";
class Skills extends Component {
    render() { 
        return ( 
            <div id="skill">
                <h3>Skills</h3>
                <div className="skill-data">
                    <div className="skill-data1">
                        <SubSkill name="C" val="80"/>
                        <SubSkill name="C++" val="65"/>
                        <SubSkill name="PYTHON" val="70"/>
                        <SubSkill name="JAVA" val="50"/>
                        <SubSkill name="PHP" val="30"/>
                        <SubSkill name="HTML" val="85"/>
                    </div>
                    <div className="skill-data1">
                        <SubSkill name="CSS" val="80"/>
                        <SubSkill name="BOOTSTRAP" val="45"/>
                        <SubSkill name="JAVASCRIPT" val="60"/>
                        <SubSkill name="JQUERY" val="45"/>
                        <SubSkill name="REACT" val="40"/>
                        <SubSkill name="FLASK" val="20"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Skills;