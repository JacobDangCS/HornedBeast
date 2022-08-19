import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.modalState} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.beastData.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.beastData.image_url} alt={this.props.beastData.title} title={this.props.beastData.title}></img>
                        <p>{this.props.beastData.description}</p>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast;