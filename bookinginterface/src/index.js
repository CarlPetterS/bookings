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

  const state = {
    selectedRoom: roomId,
    selectedEmployee: employee.id,
    selectedTeam: employee.teamId,
  }

  return {
    people,
    rooms,
    teams,
    update,
    updatePeople,
    updateRooms,
    updateTeams,
    updateAll,
    state,
    setupState,
    api
  }
}

const updatePeople = (props) => api.getPeople().then(people => update({...props, people}))
const updateRooms  = (props) =>  api.getRooms().then(rooms =>  update({...props, rooms}))
const updateTeams  = (props) =>  api.getTeams().then(teams =>  update({...props, teams}))
async function updateAll(props) {
  let people = await api.getPeople();
  let rooms  = await api.getRooms();
  let teams  = await api.getTeams();

  update({
    ...props,
    people,
    rooms,
    teams,
  })
}
// We call this on each method update, re rendering the entire tree is actually
// not a problem because of diffing algorithms in the react components layer (thanks facebook).
const update = props => {
  console.log("UPDATING WITH:")
  console.log(props)
  window.props = props; // this is really bad. hehe. We use it for the react-week-component because i was lazy.
  ReactDOM.render(<App {...props} />, document.getElementById('root'))
}

// Setup the state and then render
setupState().then(update);
registerServiceWorker();
