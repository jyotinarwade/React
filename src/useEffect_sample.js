import {useState, useEffect} from "react";

export default function Timer(){
    const[count,setCount] =useState(0);

    useEffect(() => {
        setTimeout(() => {
            //use setcount to update after first render and time
            setCount((count)=>count+1)
        },1000);
    },
        []);
//add the squre bracket to re-rendering
        return<h1>I have render{count} time!</h1>
  
}