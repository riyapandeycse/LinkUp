import React, { useEffect, useState } from 'react'

export default function stop() {
    const [count, setcount]= useState(1);

    function increaseCount(){
        setcount(currentvalue => currentvalue+1);
    }

    // use Effect
    useEffect(function(){
        setInterval(() => {
            count +1
        }, 1000);
    } ,[])
    
  return (
    <div>
        {count}
    </div>
  )
}
