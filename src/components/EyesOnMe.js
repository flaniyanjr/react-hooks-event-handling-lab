// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    function focus() {
        console.log('Good!')
    }
    return(
        <button onFocus= {focus} onBlur= {() => console.log('Hey! Eyes on me!')}>Eyes on me</button>
    )
}

export default EyesOnMe