import React from 'react'

const NameList = () => {
    const names = ['Shubham','Pratik','Souvik']
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            {nameList}
        </div>
    )
}

export default NameList
