import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignIn extends React.Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button>Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}
//