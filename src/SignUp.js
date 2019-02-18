import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /><br />
                <h1><Badge color="secondary" tag={Link} to="/">Kitchen Plaza</Badge></h1>
                <br /><br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Form>
                        <FormGroup row>
                            <Label for="examplefirstname" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input placeholder="John Doe" id="examplefirstname" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleusername" sm={2}>User</Label>
                            <Col sm={10}>
                                <Input placeholder="john_doe" id="exampleusername" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="type in your email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Pass</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="examplePassword" placeholder="create a password" />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 0 }}>
                                <Button>Sign Up</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div >
        );
    }
}