import React from 'react'
import { useState } from 'react';

export default function EmployeeList() {

    const [employeeList, setEmployeeList] = useState([]);
            const [count, setCount] = useState(1);

    function addEmployeeName(){
            const employeename= 'employee '+count;
            setEmployeeList((previousState)=>{
                return[...previousState, employeename]
            });

            setCount((previousState)=> { return previousState + 1 })
        }

        // console.log('current state', employeeList);

  return (
    <>
        <h1>Employee List</h1>
        <button onClick={addEmployeeName}>add a new employee name</button>
        <ul>
            {
                employeeList.map((el, index)=>(
                    <li key={index}>{el}</li>
                )) 
            
            }
        </ul>
    </>
  )
}
