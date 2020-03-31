import React from  'react'

//A Higher Order Component(hoc) is a function that takes Original Component
// and Returns a New Component.
const withCounter = (WrappedComponent,incrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {
                count: 0
            }
        }
    
        incCount = () => {
            this.setState(prevState => {
                return { 
                    // count: prevState.count + 1
                    count : prevState.count + incrementNumber
                }
            })
        }

        render() {
            return(
                <WrappedComponent 
                   name='Shubham'
                   count={this.state.count}
                   incCount={this.incCount}
                />
            )
        }
    }
    return WithCounter
}

export default withCounter