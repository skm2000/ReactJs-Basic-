import React, { Component } from 'react'

class Eventbinding extends Component {
    constructor() {
        super();
        this.state = {
            message : 'Hello'
        }
        //3.most common approach for event binding.Binding in theconstructor
        // this.eventHandler = this.eventHandler.bind(this)
    }

    //For approach 1,2 & 3.
    // eventHandler() {
    //     this.setState({
    //         message : 'Clicked'
    //     })
    //     console.log(this)
    // }

    //For approach 4.Class Property as arrow function.
    //Go for approach 3 or 4
    eventHandler = () => {
        this.setState({
            message : 'Clicked'
        })
    }

    //Event Binding in js
    render () {
        return (
            <div>
                <h1>{this.state.message}</h1>    
                {/* <button onClick={this.eventHandler.bind(this)}>Click</button> 1.Approach Binding in render-pls dont use*/}
                {/* <button onClick={() => this.eventHandler()}>Click</button>  2.Approach using arrow functions */}
                {/* <button onClick={this.eventHandler}>Click</button> 3.Binding inside Constructor*/}
                
                <button onClick={this.eventHandler}>Click</button>
            </div>
        )
    }
}


export default Eventbinding