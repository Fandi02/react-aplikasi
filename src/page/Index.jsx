import axios from "axios";
import React, { Component } from "react";
import CardComponent from "../component/CardComponent";
import { Row } from "react-bootstrap";
import { API_URL } from "../utils/constants";
import NavbarComponent from "../component/NavbarComponent";
import CarouselComponent from "../component/CarouselComponent";
import FooterComponent from '../component/FooterComponent';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cardBrand: [],
         };
    }

    componentDidMount() {
        axios
            .get(API_URL + "brands/samsung-phones-9")
            .then((response) => {
                const cardBrand = response.data.data.phones;
                this.setState({ cardBrand });
                console.log(cardBrand);
            })
            .catch((error) => {
                console.log(error);
            });
        }

    render() {
        const { cardBrand } = this.state;
        return (
        <div className="App">
            <NavbarComponent />
            <CarouselComponent />
            <Row>
            {cardBrand &&
                cardBrand.map((data) => (
                <CardComponent key={data.id} data={data} />
                ))}
            </Row>
            <FooterComponent />
        </div>
        );
    }
}

export default Index;