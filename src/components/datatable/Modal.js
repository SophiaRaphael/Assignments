import React, { Component } from 'react';

class Modal extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className={this.props.class === 'isOpen'? 'modal open': 'modal close'}>
        <div className= 'modalContent'>
          <div className='modalHeader'>
            <h2>Detailed Message</h2>
          </div>
          <div className ='modalBody'>
            <p>{this.props.message? this.props.message: 'NO Message' }</p>
            <button className='close' onClick={()=>this.props.closeModal()} >Close </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;