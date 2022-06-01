import {Card, Button, Col} from 'react-bootstrap';
import React from "react";
import './CardComponent.css';
import {Link} from 'react-router-dom';

function CardComponent(props) {
    return (
        <Col md={3} xs={5} className="mb-5">
      <Card className="card">
        <Card.Img variant="top" src={props.data.image} height="350px" className="image-produk"/>
        <Card.Body>
          <Card.Title>{props.data.brand}</Card.Title>
          <Card.Text>
            {props.data.phone_name}
          </Card.Text>
          <Button>
            <Link to={`/Spesifikasi/${props.data.slug}`}>Detail</Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
    )
}

export default CardComponent;