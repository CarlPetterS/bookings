import React, { Component } from 'react';

import 'react-week-calendar/dist/style.css';
import './App.css';

import { SelectEmployee, StandardCalendar } from './components';

import Wrapper from './lib/apiwrapper';
const api = Wrapper(fetch, 'http://127.0.0.1:8000');

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="navbar-header">
              <a className="navbar-brand" href="/">Bookinginterface</a>
            </div>

            <SelectEmployee {...this.props} />
          </div>
        </nav>
        <div className="container-fluid">
          <StandardCalendar {...this.props} />
        </div>
      </div>
    )
  }
}

export default App;
