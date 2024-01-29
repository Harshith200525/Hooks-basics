import { useContext, useEffect } from "react";
import { ToggleTheme } from "../App";
import { useState } from "react";

function UseContext(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  const [count , setCount] = useState(0)

  const [effect , setEffect] = useState(false)

  useEffect(() => {
   if(effect) alert('Content button clicked..!')
  },[effect])
 
  return(
    <div style={themeStyle}>
    {
      effect ?(
        <p>Successfully completed all the tasks using useContext, useEffect, useState.</p>
      ): null
    }
    <button onClick={() => setEffect(!effect)}>Content</button>
    <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Like</button>
    </div>
  )
}

export default UseContext;