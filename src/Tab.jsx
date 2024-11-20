import React, { useEffect, useState } from 'react'

export default function Tab() {
    const[currenttab , setcurrenttab]= useState("feed");

    useEffect(()=>{
         // send the fetch request to fetch data from the backend.
         // this fetchind data is the side effect of what we want.
         console.log("send the data request for" + currenttab);
    },[currenttab])
  return (
    <div>
      <button onClick={function() {
        setcurrenttab ("feed") 
      }} style={{color :currenttab == "feed" ? "red" : "black"}}>Feed</button>
      <button onClick={function(){
        setcurrenttab ("Notification") 
      }} style={{color : currenttab == "Notification" ? "red" :"black"}}>Notification</button>
      <button onClick={function(){
        setcurrenttab("Network")
      }} style={{color : currenttab == "Network" ? "red" :"black"}}>Network</button>
      <button onClick={function(){
        setcurrenttab("Jobs")
      }} style={{color : currenttab == "Jobs" ? "red" :"black"}}>Jobs</button>
    </div>
  )
}
