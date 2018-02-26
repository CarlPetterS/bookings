import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Wrapper from './lib/apiwrapper';
const api = Wrapper(fetch, 'http://127.0.0.1:8000');

async function setupState() {
  let people = await api.getPeople();
  let rooms  = await api.getRooms();
  let teams  = await api.getTeams();

  return {
    people,
    rooms,
    teams
  }
}

setupState().then(state => ReactDOM.render(<App {...state} />, document.getElementById('root')));
registerServiceWorker();
