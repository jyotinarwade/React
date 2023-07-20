
import {useState, useEffect} from "react";


//directly updating the dom html--head--title

export default function HookCounterOne(){
    const[count, setCount] = useState(0);



useEffect(() => {
    document.title= `you clicked ${count} times`;
}, [count]);

return(
    <>
    
        <button onClick={() => setCount((prevCount)=> prevCount+1)}>
            click {count}times{""}
        </button>
    </>
);
}




