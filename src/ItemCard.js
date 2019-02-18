import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class ItemCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, pic, name, price, description } = this.props.item;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={pic} alt="Card image cap" />
          <CardBlock>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{price}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button color="primary" onClick={() => this.props.removeItem(id)}>Add to Cart</Button>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

function purchase(){
  alert("Thanks for your purchase!")
}

export default ItemCard;