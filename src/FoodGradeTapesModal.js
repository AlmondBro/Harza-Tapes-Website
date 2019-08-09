import React, { Component } from 'react';  

//Import 3rd-party packages
import Modal from 'react-responsive-modal';

class FoodGradeTapesModal extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="col-md">
         <p id="foodGradeTapes" onClick={this.onOpenModal}>Click here for info on our Food Grade Tapes</p>
         <p id="customPrintedTapes" onClick={this.onOpenModal}>CUSTOM PRINTED TAPES FOR DIRECT <br/>CONTACT WITH FOOD!!</p>
        <Modal 
            id="foodGradeTape-modal"
            open={open} 
            onClose={this.onCloseModal} 
            center>
          <img className="img-fluid"
               id="custom-tapes-ad"
               src="/assets/img/Food_Grade_Tape.jpg" 
               alt="Food Grade Tape Printing Features -- Up to 5 colors, Lock Print" 
        />
        </Modal>
      </div>
    );
  }
}

export default FoodGradeTapesModal;