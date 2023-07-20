import { useState} from "react";
import React from 'react'

export default function Newstate(){
    const [car, setCar]= useState({
        brand:"Food",
        model: "Musat",
        year: "1755",
        color:"red",

    });

    const updateColor = ()=>{
        setCar(previousState => {
return{...previousState, color:"blue",brand:"BMw",model:"supercar",year:"3354"}
        });
    }
    return(
        <>
        <h1>My {car.brand}{car.model}from{car.year}</h1>
        <p>It is {car.color}</p>
        <button type="button"onClick={updateColor}>click here to update the state</button>
        </>
    )
}
