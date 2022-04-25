import React from "react";
import { Card } from "react-bootstrap";
import img from "../images/oops404.webp"


const ShowError=()=>{
return(
    <Card  style={{ width: '20rem',height:'30rem'}} className='card-box bg-light text-center square rounded border border-dark' >
        <Card.Body>
            <Card.Img src={img} alt='error' className="square rounded border"></Card.Img>
            <Card.Text className="not-found">City Not found</Card.Text>
        </Card.Body>
      </Card>
)
}

export default ShowError;