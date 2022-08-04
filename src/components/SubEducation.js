import {Component} from "react";
class SubEducation extends Component {
    render() { 
        return (
            <div className="sub-edu">
                <div className="draw"></div>
                <p className="title">{this.props.title}<span> - {this.props.place}</span></p>
                <p className="year">{this.props.year}</p>
                <p className="descript">{this.props.descript}</p>
            </div>
        );
    }
}
export default SubEducation;