import React from "react";
import './App.css';

class Submit extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            star : ''
        }
    }

    handleSubmit(){
        let intInput = parseInt(this.props.input);
        let stars = ''; 
        for (let i = 1; i <= intInput; i++) {
            for (let j = 1; j <= i; j++) {
                stars += '*';
            }
            stars += '\n';
        }
        this.setState({
            star: stars
        }); 
    }

    render(){
        return (
            <div>
                <button onClick = {this.handleSubmit.bind(this)}>Submit</button>
                <h2 className="star">{this.state.star}</h2>
            </div>
        )
    }
}

export default Submit;