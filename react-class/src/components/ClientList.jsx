import React, { useState } from 'react'

export default function ClientList() {

        const [clientList, setClientList] = useState([]);
        const [count, setCount] = useState(1);

        function addClientName(){
            const clientname= 'client'+count;
            setClientList((previousState)=>{
                return[...previousState, clientname]
            });

            setCount((previousState)=> { return previousState + 1 })
        }

        console.log('current state', clientList);
        

  return (
    <>
        <h1>List</h1>
        <button onClick={addClientName}>add a new client name</button>
        <ul>
            {
                clientList.map((el, index)=>(
                    <li key={index}>{el}</li>
                )) 
            
            }
        </ul>
    </>
  )
}
