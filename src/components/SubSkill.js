import {Component} from "react";
// import Skills from "./Skills";
class SubSkill extends Component {
    render() { 
        const style = {
            width: this.props.val + '%',
            backgroundColor : '#e199d7',
            color: '#000000',
        }
        return (
            <div className="each-skill">
                <h4>{this.props.name}</h4>
                {/* <Skills val={this.props.val}/> */}
                <div className="progress">
                    <div
                        className="progress-bar progress-bar-striped back"
                        role="progressbar"
                        style={style}
                        aria-valuenow={this.props.val}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        {this.props.val}%
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SubSkill;