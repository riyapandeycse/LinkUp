import profileimage from './assets/Linkedln profile image.jpg';
const style = { width : 200, backgroundColor:"white" ,borderRadius:10, borderColor:"Grey" , borderWidth:1, padding : 20}


export function PostComponent({name , substitle ,time , img, description}){
    return <div style={style}>
      <div style={{display:"flex"}}>
        <img src={img} style={{
          widht : 50,
          height : 50,
          borderRadius:25  
        }} />
        <div style={{fontSize:10, marginLeft:10}}>
          <b>
            {name}
          </b>
          <div>{substitle}</div>
          <div>{time}</div> 
        </div> 
      </div>
      <div style={{fontSize:12}}> {description}</div>
    </div>   
  }