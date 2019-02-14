import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top src="./pics/fur1.JPG" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Add to cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;