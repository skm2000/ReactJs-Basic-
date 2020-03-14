import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureCompo from './PureCompo'

class ParentCompo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Shubham'
        }
    }
    
    componentDidMount() {
        setInterval( () => {
            this.setState({
                name: 'Shubham'
            })
        },2000)
    }
    render() {
        return (
            <div>
            Parent Component
            <RegularComp name={this.state.name}/> 
            <PureCompo name={this.state.name}/>
            </div>
        )
    }
}

export default ParentCompo
