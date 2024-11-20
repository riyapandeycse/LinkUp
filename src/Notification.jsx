import React, { useEffect, useState } from 'react'

export default function Notification() {
    const [count , setcount] = useState(1);
    const [count2 , setcount2]= useState(100);

    function increaseCount(){
        setcount(curval => curval +1);
    }

    function decreaseCount(){
        setcount2(curval => curval - 1);
    }

    useEffect(function() {
        console.log("caling only once when it's mount");
        setInterval(increaseCount,1000);
        setInterval(decreaseCount , 2000)
    },[])
   

  return (
    <div>
        <div style={{display:'flex'}}>
            <div style={{background:"red", borderRadius : 20 ,paddingLeft:20, paddingTop:5 , width:20 , height:25 }}>
                {count}
                {count2}
            </div>
        </div>
       <img src={'https://static.vecteezy.com/system/resources/previews/015/934/666/original/bell-icon-simple-element-symbol-for-template-design-can-be-used-for-website-and-mobile-application-vector.jpg'}
        width={30}
       />
    </div>
  )
}
