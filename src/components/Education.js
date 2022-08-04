import {Component} from "react";
import SubEducation from "./SubEducation";
class Education extends Component { 
    render() { 
        return (
            <div id="experience">
                <h3>Experience and Education</h3>
                <div classname="exptext">
                    <SubEducation title="Bachelor Degree" place="The National Institute of Engineering" year="Aug 2019 - present" descript="Studying in 3rd year  computer science engineering with CGPA of 9.27."/>
                    <SubEducation title="Events Lead" place="Googel Developers Student Club, NIE" year="Jul 2021 - Jul 2022" descript="Responsibility of organise events and make reports on events."/>
                    <SubEducation title="Web Developer" place="Tequed Labs" year="Aug 2021 - Oct 2021" descript="Two months of intership with training and project building."/>
                    <SubEducation title="Sponsorship ExCom" place="NIE IEEE Student branch" year="Aug 2020 - Aug 2021" descript="Responsibility of finding sponsors for fests of the club."/>
                    <SubEducation title="Creative Volunteer" place="NIE IEEE Student branch" year="Aug 2019 - Aug 2020" descript="Volunteered for creative works in club."/>
                    <SubEducation title="Pre-University" place="Gopalaswamy Shishuvihara Pre-University College (Sankalpa)" year="May 2017 - May 2019" descript="I completed first and second PUC with 94%."/>
                    <SubEducation title="Schooling" place="St.Thomas School" year="May 2010 - May 2017" descript="Studied from fourth to tenth and passed tenth with 96.64%."/>
                </div>
            </div>
            
        );
    }
}
 
export default Education;