import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Card from "./Card";
import Carousel from "./Carousel.js";
//import Pagination from "./Pagination.js";
import { Container, Row, Col } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <br></br>
        <Carousel></Carousel>
        <br></br>
        <Container>
          <Row>

          </Row>
          <Row>
            <Col> <Card></Card> </Col>
            <Col> <Card></Card> </Col>
            <Col> <Card></Card> </Col>
          </Row>
          <Row>
            <Col> <Card></Card> </Col>
            <Col> <Card></Card> </Col>
            <Col> <Card></Card> </Col>
          </Row>
        </Container>
        <br></br>
        <Pagination aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              1
          </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
          </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
          </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              4
          </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              5
          </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

export default App;
