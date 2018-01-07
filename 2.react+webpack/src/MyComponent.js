import React, { Component } from 'react';
import './MyComponent.css';
import gravatar from '../asset/gravatar.jpg';

class MyComponent extends Component {

    constructor () {
        super();
        this.state = {
            text: ''
        }

    }

    componentDidMount() {
        this.setState({
            text: 'hello World'
        })
    }

    render () {
        
        return (

            <div>
                <img style={{width: 100, height: 100}} src={gravatar} />
                <h3>{this.state.text}</h3>
            </div>

        )

    }


} 

export default MyComponent;