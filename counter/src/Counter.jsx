import React, {useState} from "react";

export const Counter = () =>{
    const [count,setCount] = useState(0)
    const onIncrement = ()=>setCount(count+1)
    const onDecrement = ()=>setCount(count-1)
    return (
         <div>
           <h1>Count App</h1>
           <p> Count : {count}</p>
           <button onClick={onIncrement}>+</button>
           <button onClick={onDecrement}>-</button>
         </div>
    )
}

