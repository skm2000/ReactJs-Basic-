import React from 'react'

function FunctionClick() {

    //Event Handling is a function and
    //not a function call.Hence we have not used clickHandler()
    function clickHandler() {
        console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>  
        </div>
    )
}








export default FunctionClick