import React, { Component } from 'react';

import 'react-week-calendar/dist/style.css';
import './App.css';

import { 
  SelectEmployee,
  StandardCalendar,
  SelectRoom,
} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Bookinginterface</a>
            </div>
            <SelectRoom {...this.props} />
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
