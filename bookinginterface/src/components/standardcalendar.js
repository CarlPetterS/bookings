import React from 'react';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
import Modal from './bookingmodal';

export default class StandardCalendar extends React.Component {

  constructor(props) {
    super(props);

    const { people } = props;
    const room = props.rooms.find(r => r.id === props.state.selectedRoom)

    this.state = {
      people: people,
      lastUid: 4,
      selectedIntervals: room.bookings.map((booking, i) => ({
        uid: i + 1,
        start: moment(booking.start_date),
        end: moment(booking.end_date),
        value: people.find(p=>p.employee[0].id===booking.employeeId).name
      }))
    }
  }

  componentWillReceiveProps(props) {
    const { people } = props;
    const room = props.rooms.find(r => r.id === props.state.selectedRoom)

    this.setState({
      people: people,
      lastUid: 4,
      selectedIntervals: room.bookings.map((booking, i) => ({
        uid: i + 1,
        start: moment(booking.start_date),
        end: moment(booking.end_date),
        value: people.find(p=>p.employee[0].id===booking.employeeId).name
      }))
    })
  }

  handleEventRemove = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals.splice(index, 1);
      this.setState({selectedIntervals});
    }
  }

  handleEventUpdate = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals[index] = event;
      this.setState({selectedIntervals});
    }
  }

  handleSelect = (newIntervals) => {
    const {lastUid, selectedIntervals} = this.state;
    const intervals = newIntervals.map( (interval, index) => {
      return {
        ...interval,
        uid: lastUid + index
      }
    });

    const booking = {
      endDate: intervals[0].end.toString(),
      startDate: intervals[0].start.toString(),
      roomId: this.props.state.selectedRoom,
      booked_by: this.props.state.selectedEmployee
    }

    const duration = moment.duration(intervals[0].end.diff(intervals[0].start));
    const hours = duration.asHours();

    const teamIdParamForCostLog = this.props.state.selectedTeam;
    const room = this.props.rooms.find(r => r.id === booking.roomId)
    const costLog = {
      date: intervals[0].start.toDate(),
      cost: hours * (room.cost_per_hr) + (room.facilities.reduce((sum, fac) => fac.cost + sum,0))
    }

    const { createBooking, createCostLog } = this.props.api

    Promise.all([createBooking(booking), createCostLog(teamIdParamForCostLog, costLog)]).then(res => {
      console.log(res);
      this.props.updateRooms(this.props)
    }).catch(console.log)
  }

  render() {
    return <WeekCalendar
      startTime = {moment({h: 8, m: 0})}
      scaleUnit = {30}
      endTime = {moment({h: 22, m: 0})}
      numberOfDays= {14}
      selectedIntervals = {this.state.selectedIntervals}
      onIntervalSelect = {this.handleSelect}
      onIntervalUpdate = {this.handleEventUpdate}
      onIntervalRemove = {this.handleEventRemove}
      modalComponent = {Modal}
    />
  }
}

