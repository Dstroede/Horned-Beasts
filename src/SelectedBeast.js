import React from "react";
import {Modal} from "react-bootstrap";


class SelectedBeast extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         beast: this.props.beast
    //     }
    // }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.hideBeastModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.beast.image_url} alt={this.props.beast.keyword} style={{ width: '22rem', justifyContent: 'center', padding: '5px' }} />
                    <p>Number of Horns: {this.props.beast.horns}</p>
                    <p>Description: {this.props.beast.description}</p>
                </Modal.Body>
                <Modal.Footer>
        {/* //   <Button variant="primary" onClick={this.handleFavorites}>
        //   <span role="img" aria-label="heart">💘Favorite</span> {this.state.favorites}
        //   </Button> */} 
        </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast;