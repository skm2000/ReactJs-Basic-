import React, { Component } from 'react'

class ClassClick extends Component {
    //class component event handling passed through this.functionName and not this.functionName()
    clickHandler(){
        console.log('Click the button')
    }
    render () {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick