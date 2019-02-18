import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import './SignIn.css';

export default class SignIn extends React.Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /><br />
                <h1><Badge color="secondary" tag={Link} to="/">Kitchen Plaza</Badge></h1>
                <br /><br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Form>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="type in your email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Pass</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="examplePassword" placeholder="type in your password" />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 0 }}>
                                <Button>Log In</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <hr></hr>
                <Link to={"./SignUp.js"}>Create new account?</Link>
            </div >
        );
    }
}
//