import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navbar from './Navbar';
import Media from './Media'
import { createSocket } from 'dgram';
import ItemCard from './ItemCard'

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar />
            </div>
        );
    }
}