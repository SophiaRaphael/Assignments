import React, { Component } from 'react';

class CountTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unseen: 0,
      acted: 0
    }
  }
  
  componentDidMount() {
    let {unseen,acted} = this.props.updateCount()
    this.setState({
      unseen: unseen,
      acted: acted
    })
  }
  render() {
    const {unseen, acted} = this.state
    return (
      <table className='statusTable'>
        <thead>
          <tr>
            <th>Status</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UNSEEN</td>
            <td>{unseen}</td>
          </tr>
          <tr>
            <td>ACTED</td>
            <td>{acted}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CountTable;
