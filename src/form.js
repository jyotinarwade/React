import { useState} from "react";

import React from 'react';

export default function Reactform(){
    const[name, setName] =useState("")
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")
    const [myCar, setMyCar] = useState("")
    const [myState, setMyState] = useState("")


    const handleChangeSelect = (event)=> {
        //event.preventDefault() we will not add
        setMyCar(event.target.value);
        
    }
    const handleState = (event)=> {
        //event.preventDefault() we will not add
        setMyState(event.target.value)
    }

    const handleEmail = (event)=> {
        setEmail(event.target.value)
    }
    const handlePassword = (event)=> {
        setPassword(event.target.value)
    }
const handleSubmit = (event)=> {
    event.preventDefault()
    if(email.length === 0){
        alert("email id cannot be empty")
        return
    }
    if(password.length <8){
        alert("password cannot be less than 8 characters")
        return
    }
    alert(`You Successfully Register ${name}`)
}
return(
    <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="center">
            <label>Enter Name</label>
            <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}}
            />
</div>
<div className="center">
<label>Enter Email</label>
            <input type="email" value={email} onChange={handleEmail}
            />
</div>
<div className="center">
<label>Enter Password</label>
            <input id="pass" type="password" value={password} onChange={handlePassword}
            />
            </div>
            <div className="center">
            <label>Enter Password
            <select  className="select" value={myCar} onChange={handleChangeSelect}>
                <option value="fort">India</option>
                <select value={myState} onChange={handleState}>
                <option value="ma">Maharashtra</option>
                <option value="kerala">Kerla</option>
                </select>
                <option value="uk">UK</option>
                <option value="uae">UAE</option>
            </select>
            </label>
            </div >
            <input id="submit" type ="submit" />

        </form>
    </div>
)

    
}