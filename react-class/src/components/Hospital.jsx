import React from 'react'
import Patient from './Patient'

export default function Hospital() {
    // const name="kumar";
    // const hospitalName="appolo"
    // const patientInfo = {
    //     name: "kumar",
    //     hospitalName: "appolo",
    // }
    // const isHospitalOpen = false;

    // const patientInfo={}

    const patientList =[
      {name: "Ganesh", bloodgroup: "O+ve"},
      {name: "kumar", bloodgroup: "A+ve"},
      {name: "aslalm", bloodgroup: "B+ve"},
    ]
  return (
    <>
    {/* <Patient name={name} hosName={hospitalName}/> */}
    {/* {
      patientInfo.name !== undefined && patientInfo.hospitalName !== undefined ? <Patient patientInfo={patientInfo}/> : null
    } */}
    
    {/* {
      isHospitalOpen ? <h2>Hospital Open</h2> : <h2>Hospital closed</h2>
    } */}

    <ul>
      {patientList.map((patientInfo)=>{<li><Patient patientInfo={patientInfo}/></li>})}
    </ul>
    </>
  )
}
