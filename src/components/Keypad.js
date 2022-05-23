// Code Keypad Component Here
import React from "react";

function Keypad(){
  function change(event){
    console.log(`${event.target.placeholder}`)
  }

  return (
  <input 
  type="password"
  onChange={change}
  placeholder="Entering password..."
  />
  )
}

export default Keypad;