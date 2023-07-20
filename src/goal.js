import React from 'react'

function Scored(){
    return(
        <h1>Team Scored</h1>
    )
}

function NoScored(){
    return(
        <h1>Not Scored</h1>
    )
}

export default function Goal(props){
    const isGoal1=props.isGoal;

    if(isGoal1){
        return <Scored />
    }
    return < NoScored />
}