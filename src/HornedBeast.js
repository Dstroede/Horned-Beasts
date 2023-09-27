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
  handleModal = () => {
    this.props.setSelectBeast(this.props.beast)
    this.props.showBeastModal();

  }

handleFavorites = () => {
    this.setState({
        favorites:this.state.favorites + 1
    });
};
    render() {
      return (
        <Card 
            style={{ width: '15rem', margin: '20px'}}
    
            >
          <Card.Img
            variant="top" 
            onClick={this.handleModal}
            src= {this.props.beast.image_url}
            alt= {this.props.beast.title} 
            style={{ width: 'auto', height: 'auto'}}
            />
          <Card.Body>
             <Card.Title>{this.props.beast.keyword}</Card.Title>
             <Card.Text>
             <p> This Beast Has {this.props.beast.horns} Horn(s)</p>
             </Card.Text>
               <Button onClick={this.handleFavorites}><span role="img" aria-label="heart">💘</span> {this.state.favorites} Favorites</Button>
               
           </Card.Body>
       </Card>
  );
}
};

export default HornedBeast;