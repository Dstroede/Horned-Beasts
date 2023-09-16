import React from "react";
import {Modal} from "react-bootstrap";


class SelectedBeast extends React.Component {

    render() {

        return (
            <Modal show={this.props.showModal} onHide={this.props.hideBeastModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.beast.img_url} alt={this.props.beast.keyword}/>
                    <p>{this.props.beast.description}</p>
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