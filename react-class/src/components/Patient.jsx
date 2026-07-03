import React from 'react'

export default function Patient(props) {
  const {name, hosName} = props;
  // const name="kumar"
  const text=`Hi i'm ${name},i'm patient from ${hosName} hospital`
  return (
    <div>
        <h2>patient 1</h2>
        <h2>patient 2</h2>
        <p>{text}</p>
    </div>
  )
}

