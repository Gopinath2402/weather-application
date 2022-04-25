import React, { useState } from "react";
import { Card,Button,InputGroup,FormControl} from "react-bootstrap";
import image from "../images/background.avif"
const Serach=(props)=>{
 const [btn,btncontrol]= useState(true)
return(
    <Card style={{ width: '20rem',height:'30rem'}}  className='card-box bg-light p-3 text-center square rounded border border-dark' >
  <Card.Img variant="top" src={image} alt='img' className='square rounded border ' height={465} width={200} />
  <Card.ImgOverlay className="mask" style={{backgroundColor:"rgba(0,0,0,0.1)"}} >
  <Card.Body className="text-white d-grid gap-5">
    <Card.Title className="m-2 search-title">Weather App using React </Card.Title>
    <InputGroup className="inputgroup">
  <FormControl 
      placeholder="Search City"
      aria-label="Search City"
      aria-describedby="basic-addon1" onKeyUp={(e)=>{
        if(e.code==="Enter" && e.target.value.length<0){
          props.updateCity(e.target.value);
        }
      }} onChange={(e)=>{
      if (e.target.value.length > 0 && e.target.value!=="") {
        props.updateCity(e.target.value);
        btncontrol(false);
      }
      else{
        btncontrol(true)
      } 
      }}
    />
     <Button variant="info search" disabled={btn} type='submit'onClick={props.fetchWeather}>search</Button>
  </InputGroup>
  </Card.Body>
  </Card.ImgOverlay>
  
</Card>
)
}

export default Serach;