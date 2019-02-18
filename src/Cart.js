import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navbar from './Navbar';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Navbar />
                Cart Page
            </div>
        );
    }
}