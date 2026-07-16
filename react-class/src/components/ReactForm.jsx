import React, { useState } from 'react'

export default function ReactForm() {

const [name, setName] = useState("");

console.log("current state",name);


  return (
    <>
        <form action="">
            <label htmlFor="">Enter your name:</label>
            <input type="text" onChange={(e)=> {setName(e.target.value)}} />
        </form>
    </>
  )
}
