import React from 'react';

import { useEffect } from 'react';

export default function Stopwatch() {

    useEffect(()=> {
        console.log("screen refreshed");
        // checkCount();
        setCount(1);

        setTimeout(()=>{
          setCount((pv)=>{return pv+1})
        },2000);
    }, []);

    function checkCount(){
      if(count>10){
        setCount(1);
      }
    }

    function updateCount(){
      setCount((preCount)=>{
        return precount+1;
      });
    }

  return (
    <>
      <h1>I have rendered {count} times</h1>

        <button onClick={updateCount}>update</button>
    </>
  );
}
