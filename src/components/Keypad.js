// Code Keypad Component Here
import React from 'react'

function Keypad (){
    function password() {
        console.log('Entering password...')
    }
    return (
        <input type='password' onChange={password}/> 
    )
}

export default Keypad;