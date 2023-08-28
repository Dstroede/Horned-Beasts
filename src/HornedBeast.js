import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        }
  }
handleFavorites = () => {
    this.setState({
        favorites:this.state.favorites + 1
    });
}
    render() {
      return (
        <Card style={{ width: '18rem' }}>
            <p> {this.state.favorites} Favorites</p>
          <Card.Img
            variant="top" 
            src= {this.props.image_url}
            alt= {this.props.title} />
          <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
             <p>{this.props.description}</p>
             </Card.Text>
               <Button onClick={this.handleFavorites}>Favorite</Button>
               
           </Card.Body>
       </Card>
  );
}
 }

export default HornedBeast;