import { useState } from "react";
import { useEffect } from "react";

function Progression5(){

  const [currAge, setAge] = useState(19);
  const [currSib, setSib] = useState(3);

  useEffect(()=>{
    alert(`something changed ${currAge}`)
  },[currAge])

  return(
    <div>
      <h3>My Current Age is {currAge}</h3>
      <h4>My siblings {currSib}</h4>

      <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
      <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
    </div>
  )

}


export default Progression5;