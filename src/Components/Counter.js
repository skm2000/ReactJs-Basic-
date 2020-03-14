import React,{ Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count : 0
        }
    }

    incCount(){
        // setState can accept two parameters one is object other is a function

        // this.setState({     //Object What to do next(after clicking)
        //     count : this.state.count + 1
        // },
        //  () => {                 //function
        //      console.log('Callback Value ',this.state.count)
        // })
        // console.log(this.state.count)

        this.setState((prevState) => ({
            count : prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incFive() {
        this.incCount()
        this.incCount()
        this.incCount()
        this.incCount()
        this.incCount()
    }

    render () {
        return(
           <div>
           <h1>Count - {this.state.count}</h1>
           <button onClick = {() => this.incFive()}>Increment</button>
           </div> 
        )
    }
}

export default Counter