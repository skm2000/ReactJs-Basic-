import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickedCounter extends Component {

    //This code was before making hoc
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count : 0,
    //     }
    // }

    // incCount = () => {
    //     this.setState(prevState => {
    //         return {count : prevState.count + 1}
    //     })
    // }
    
    render() {
        // const { count } = this.state
        //hoc dereferenced by this,props
        const { count,incCount } = this.props
        return (
            <div>
               <button onClick={incCount}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

// export default withCounter(ClickedCounter)
export default withCounter(ClickedCounter,10)
