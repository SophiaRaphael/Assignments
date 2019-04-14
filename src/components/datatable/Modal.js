import React from 'react';

const Modal = (props) => {

  return (
    <div className={props.class === 'isOpen'? 'modal open': 'modal close'}>
      <div className= 'modalContent'>
        <div className='modalHeader'>
          <h2>Detailed Message</h2>
        </div>
        <div className ='modalBody'>
          <p>{props.message? props.message: 'NO Message' }</p>
          <button className='close' onClick={()=>props.closeModal()} >Close </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;