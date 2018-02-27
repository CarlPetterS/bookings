import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Wrapper from './lib/apiwrapper';
const api = Wrapper(fetch, 'http://127.0.0.1:8000');

// Asynchronous setup function
async function setupState() {
  let people = await api.getPeople();
  let rooms  = await api.getRooms();
  let teams  = await api.getTeams();

  const roomId = rooms[0].id;
  const employee = people.filter(e => e.employee.length > 0)[0].employee[0]
  // Active team depends on the employee currently looking to make a booking.
  // This is an awkward case for us, since employees belongs to team, but it is acceptable.
  const teamId = teams.find(t => t.id === employee.teamId).id;

  const state = {
    selectedRoom: roomId,
    selectedEmployee: employee.id,
    selectedTeam: teamId,
  }

  return {
    people,
    rooms,
    teams,
    update,
    state,
    setupState,
    api
  }
}

// We call this on each method update, re rendering the entire tree is actually
// not a problem because of diffing algorithms in the react components layer (thanks facebook).
const update = state => {
  console.log("UPDATING WITH:")
  console.log(state)
  ReactDOM.render(<App {...state} />, document.getElementById('root'))
}

// Setup the state and then render
setupState().then(update);
registerServiceWorker();
