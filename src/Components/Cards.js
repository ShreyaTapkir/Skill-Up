import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
} from "reactstrap";
import Alert from "./Alert";



export default function Cards(props) {
 
  return (
    <>
    {props.details.length >0 ? props.details.map((value, index)=>(
    <div className="CardStyle" key={index}>
      <Card className="card">
        <CardImg  className="cardImg" variant="top" src={value.img} />
        <CardBody>
          <CardTitle><b>{value.title}</b></CardTitle>
          <CardText>
           {value.description}
          </CardText>
          <CardSubtitle>By {value.author}</CardSubtitle>
          <button className="my-3 mybtn">Explore</button>
        </CardBody>
      </Card>
    </div>
    )): <Alert/>}
    

    </>
  );
}
