import React from 'react'
import Patient from './Patient'

export default function Hospital() {
    // const name="kumar";
    // const hospitalName="appolo"
    const patientInfo={
        name:"kumar",
        hospitalName:"appolo"
    }
  return (
    <>
    {/* <Patient name={name} hosName={hospitalName}/> */}
    <Patient patientInfo={patientInfo}/>
    </>
  )
}
