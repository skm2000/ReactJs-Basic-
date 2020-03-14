import React, { Component } from 'react'

class Welcome extends Component {
    render () {
        const {name,code,children} = this.props
        return (
            <div>
                <h1>Class Component {name} and code {code}</h1>
                {children}
            </div>
        ) 
    }
}

export default Welcome