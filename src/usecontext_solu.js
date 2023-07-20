import {useState,createContext, useContext} from "react";
// import ReactDom from "react-domm/client";

//props drilling : drilling the props though the entire nesting
const UserContext = createContext();

export default function Component11(){
    const [user, setuser] = useState("jaeeay HAll");

    return(
        <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2  />
        </UserContext.Provider>
    );
}
 function Component2(){
 

    return(
        <>
        <h1>Component2</h1>
        <Component3 />
        </>
    );
}

function Component3(){
  
    return(
        <>
        <h1>comonent3</h1>
        <Component4  />
        </>
    );
}
function Component4(){
   

    return(
        <>
        <h1>component4</h1>
        <Component5 />
        </>
    );
}

function Component5(){
    const user1 = useContext(UserContext);

    return(
        <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user1} again`}</h2>
        </>
    );
}
