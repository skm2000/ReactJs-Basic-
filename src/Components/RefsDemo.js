import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef() //step 1:Create a new component,step 2 : attach this ref to input element,step 3 :focus method on input element

    }

    componentDidMount() {
        this.inputRef.current.focus() // will focus on that particular input text
        console.log(this.inputRef)
    }


    //refs is also used to fetch the input value
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
            <input type="text" ref={this.inputRef}/>
            <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
