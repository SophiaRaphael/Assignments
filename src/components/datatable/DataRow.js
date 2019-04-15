import React, { Component } from 'react';
import Modal from './Modal';

class DataRow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: 'isClose'
    }
  }
  
  renderDate(miliseconds) {
    if(!miliseconds) {
      return '-';
    }
    else {
      var date = new Date(miliseconds);
      return(date.toDateString());
    }
  }

  openModal() {
    this.setState({
      modal: this.state.modal === 'isOpen'? 'isClose':'isOpen'
    })
  }

  closeModal() {
    this.setState({
      modal: this.state.modal === 'isOpen'? 'isClose':'isOpen'
    })
  }

  render() {
    const data = this.props.data;
    const blankCell = '-'
    return (
      <tr>
        <td>{this.renderDate(data.creationDate)}</td>
        <td>{this.renderDate(data.lastUpdate)}</td>
        <td>{data.type? data.type:blankCell}</td>
        <td>{data.status? data.status:blankCell}</td>
        <td>{data.message? data.message:blankCell}</td>
        <td>
          <button className='viewMore' onClick={() => this.openModal()}>View More</button>
          <Modal message={data.metadata.rollUpMessage} class={this.state.modal} closeModal={()=>this.closeModal()}/>
        </td>
      </tr>
    );
  }
}

export default DataRow;
