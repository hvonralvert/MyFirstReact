import React, { Component } from 'react';
import './App.css';

import Table from './components/Table';

class App extends Component {
  render() {
    const characters = [
      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspring actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <Table characterData={characters}></Table>
        </header>
      </div>
    );
  }
}

export default App;
