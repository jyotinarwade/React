import {useState,createContext, useContext} from "react";
// import ReactDom from "react-domm/client";

//props drilling : drilling the props though the entire nesting
const UserContext = createContext();

export default function Component1(){
    const [user, setuser] = useState("jaeeay HAll");

    return(
        <>
        <h1>this is component 1</h1>
        <Component2 user={user}/>
        </>
    );
}
 function Component2({user}){
 

    return(
        <>
        <h1>Component2</h1>
        <Component3 user={user} />
        </>
    );
}

function Component3({user}){
  
    return(
        <>
        <h1>comonent3</h1>
        <Component4 user={user} />
        </>
    );
}
function Component4({user}){
   

    return(
        <>
        <h1>component4</h1>
        <Component5 user={user}/>
        </>
    );
}

function Component5({user}){

    return(
        <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again`}</h2>
        </>
    );
}