import React from 'react'

// function Greet(){
//     return <h1>Functional Component</h1>
// }

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Functional Component {props.name} and code {props.code}</h1>
            {props.children}
        </div>
    )
}

export default Greet