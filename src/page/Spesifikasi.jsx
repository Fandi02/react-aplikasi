import React, { Component } from 'react';
import NavbarComponent from '../component/NavbarComponent';
import Detail from '../component/Detail';
import { API_URL } from "../utils/constants";
import axios from "axios";

export default class Spesifikasi extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cardPhone: [],
    };
}

componentDidMount() {
  const url = this.props.match.params.slug;
    axios
        .get(API_URL + this.props.match.params.slug)
        .then((response) => {
            const cardPhone = response.data.data;
            this.setState({ cardPhone });
            console.log(url);
        })
        .catch((error) => {
            console.log(error);
        });
    }
  render() {
    return (
      <div>
          <NavbarComponent />
          <Detail />
      </div>
    )
  }
}