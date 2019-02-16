import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ItemCard from './ItemCard';
import Carousel from "./Carousel"
import Navbar from "./Navbar"

class Home extends Component {
    constructor() {
        super();
        this.state = {
            item: [
                {
                    id: 1,
                    name: "Kitchen Set",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 2,
                    name: "Kitchen Set",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 3,
                    name: "Kitchen Set",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 4,
                    name: "Kitchen Set",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 5,
                    name: "Kitchen Set",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
                {
                    id: 6,
                    name: "Kitchen Set",
                    price: "$299.99",
                    description: "Complete Kitchen Set"
                },
            ]
        }
    }

    removeItem(id) {
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