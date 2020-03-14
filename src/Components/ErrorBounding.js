import React, { Component } from 'react'

class ErrorBounding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError : false,
        }
    }

    /*A class component becomes error boundry by defining either or 
    both of static getDerivedStateFromError(error) and componentDidCatch*/
    
    static getDerivedStateFromError(error){ //changes the state after what input has been given
        return {
            hasError : true
        }
    }

    componentDidCatch(error,info) {
        console.log(error)
        console.log(info)
    }

    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children //will give the required output
    }
}

export default ErrorBounding