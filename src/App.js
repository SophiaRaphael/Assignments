import React, { Component } from 'react';
import DataTable from './components/datatable/DataTable';
import CountTable from './components/statustable/CountTable';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoaded: null,
      items: [],
      error: '',
      unseenCount: 0,
      actedCount: 0
    }
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    let unseen = 0, acted= 0;
    const action = this.state.action;
    
    for (let item of action) {
      if(item.status === 'UNSEEN') {
        unseen++
      }
      else if(item.status === 'ACTED') {
        acted++
      }
    }
    return ({unseen,acted});
  }

  componentDidMount() {
    fetch("https://www.mocky.io/v2/5caec4f2340000b321ab6de9")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            action: result.actions
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    let { error, isLoaded, action } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else if (!action.length) {
      return <div>Empty Response</div>;
    } 
    else {
      return (
        <div className='tableWrapper'>
          <DataTable data={action} />
          <CountTable updateCount = {this.updateCount} />
        </div>
      );
    }
  }



}

export default App;
