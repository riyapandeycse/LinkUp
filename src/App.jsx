import React, { useState } from 'react'
import profileimage from './assets/Linkedln profile image.jpg';
import { PostComponent } from './post';
import stop from './stop';
import Notification from './Notification';

function App() {

  const [posts , setpost]= useState([]);

  const PostComponents= posts.map(post=> <PostComponent
    name ={post.name}
    substitle={post.substitle}
    time={post.time}
    img={post.img}
    description={post.description}
  ></PostComponent>)

  function addpost(){
    setpost([...posts,{
      name:"Riya",
      substitle:"1000 Followers" ,
      time:"20m" , 
      img: profileimage, 
      description:"Loading Best version of Riya."
    }])

  }
  return (
    <div >
      {/* <button onClick={addpost}> Add Post</button>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          <div>
            {PostComponents}
          </div>
        </div>
      </div> */}
      <Notification/>
    </div>
  )
}



const ToggleMessage = ()=>{
  // Define a state Variable.
  const[isvisible , setisvisible] = useState(false);
  // the compenet that uses the state varibale re-renders.
  return(
    <div>
      <button onClick={()=> setisvisible(!isvisible)}>
        Toggle Message
      </button>
      {isvisible && <p> This message is conditionally rendered</p>}
    </div>

  );
};



function Trendingcompoent(){
    <div style={{fontSize:12}}>
      <B> Trending Now</B>
      <p> curated by Linkedin news</p>
    </div> 

}

function ProfileCard(){
    return <div style={style}>
      <div style={{display:"flex" , justifyContent:"center"}}>
        <img src={profileimage} style={{
          width:20,
          height:20,
          borderRadius:20
        }}></img>
        <div>
          Associate Software Developer at Coditas.
        </div>
      </div>
      <div>
        Profile viewers
      </div>
      <div>
        Post impression
      </div>
    </div>
}
export default App

