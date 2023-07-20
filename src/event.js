import React from 'react'

function Shoot(){
    alert("Your file is being uploaded!")
    //  console.log("Add To Cart");
}

export default function Event(){
    return(

        <>
        <h2>have clicked</h2>
        {/* <h2 id="demo"></h2> */}
        <button onClick={Shoot}> click Me</button>
        </>
    )
}