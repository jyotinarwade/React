import React from 'react'

function Car(props){
    return(
        <h1>This is a {props.name}car {props.color}</h1>
    )
}

export default function List(){
    const cars= [
        {id:1,name:"jyoti",color:"red"},
        {id:1,name:"jyoti",color:"red"}
    ]
    
return(
    <ul>
        {cars.map((car)=> <Car name={car.name}/>)}
    </ul>
)
}