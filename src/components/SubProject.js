import { Component } from "react";
class SubProject extends Component{
    render(){
        return(
            <div className="project">
                <h4>{this.props.name}</h4>
                <div className="sub-project">
                    <img src={this.props.pic}></img>
                    <div className="pro-text">
                        <p>{this.props.text}</p>
                        <a href={this.props.link} target="_blank">Visit Website</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default SubProject;