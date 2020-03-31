import React,{ Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1}
    //     })
    // }


    render() {
        // const { count } = this.state
        const { count, incCount } = this.props
        return(
            <div>
                <h2 onMouseOver = {incCount}>{this.props.name} Hovered {count} times</h2>
            </div>
        )
    }
}

// export default withCounter(HoverCounter) //hoc component export
export default withCounter(HoverCounter,5)