import { Component } from "react";
import SubProject from "./SubProject";
import mysore from "../assets/mysore.jpg";
import nie from "../assets/nie.jpg";
import tile from "../assets/tile.jpg";
class Project extends Component{
    render(){
        return(
            <div id="project">
                <h3>Projects</h3>
                <div className="pro">
                    <SubProject name="Tiles stock Management" pic={tile} text="It was made as a part of a minor project in DBMS in the 5th semester. It consists of two parts, admin and public. The public gets to view different types of tiles, sanitary and other accessories available in the company. The admin can view the stock of tiles, today's sales, purchases, and shortage list. This website helps to keep records and maintain them." link="https://narayani2327.github.io/tile/"/>
                    <SubProject name="College Website" pic={nie} text="It was made as a part of an internship in Tequed Labs duing Aug 15 - Oct 15, 2021. The reference website was The National Insitute of Engineering. It was made in a period of 3 weeks." link="https://narayani2327.github.io/college-website/"/>
                    <SubProject name="Mysore Tourism Website" pic={mysore} text="It was made as a part of an AICTE activity in 3rd semester. It consists of various hotels, picnic spots, and tourist places in and around Mysore with their images, information, and location links. It also consists of specialties in Mysore." link="https://narayani2327.github.io/mysore-tourism/"/>
                </div>
            </div>                
        );
    }
}
export default Project;