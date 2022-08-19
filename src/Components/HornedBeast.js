import React from "react";
import { Button, Card } from 'react-bootstrap';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0
    }

  }

  addFavorite = () => {
    this.setState({
      favorite: this.state.favorite + 1
    })
  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.img_url} alt={this.props.title} title={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button onClick={this.addFavorite}>Likes: {this.state.favorite}</Button>
        </Card.Body>
      </Card>
    );
  }
}


export default HornedBeast;