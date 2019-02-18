import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ItemCard from './ItemCard';
import Carousel from "./Carousel"
import Navbar from "./Navbar"
import SearchField from 'react-search-field';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            item: [
                {
                    id: 1,
                    pic: "./pics/fur1.JPG",
                    name: "Kitchen Set 1",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 2,
                    pic: "./pics/fur2.PNG",
                    name: "Kitchen Set 2",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 3,
                    pic: "./pics/fur3.jpg",
                    name: "Kitchen Set 3",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 4,
                    pic: "./pics/fur4.jpg",
                    name: "Kitchen Set 4",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 5,
                    pic: "./pics/fur5.jpg",
                    name: "Kitchen Set 5",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 6,
                    pic: "./pics/fur6.jpg",
                    name: "Kitchen Set 6",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 7,
                    pic: "./pics/fur7.jpg",
                    name: "Kitchen Set 7",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 8,
                    pic: "./pics/fur8.jpg",
                    name: "Kitchen Set 8",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 9,
                    pic: "./pics/fur9.jpg",
                    name: "Kitchen Set 9",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
            ],

        }
    }

    removeItem(id) {
        alert("Thanks for your purchase!")
        this.setState({ item: this.state.item.filter(item => item.id !== id) });
    }

    render() {
        let items = this.state.item.map(item => {
            return (
                <Col sm="4">
                    <ItemCard key={item.id} removeItem={this.removeItem.bind(this)} item={item} />
                    <br />
                </Col>
            )
        })
        return (
            <div>
                <Navbar />
                <br />
                <SearchField
                    placeholder='Search item'
                />
                <br /><br />
                <Carousel />
                <br />
                <Container>
                    <Row>
                        {items}
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Home;