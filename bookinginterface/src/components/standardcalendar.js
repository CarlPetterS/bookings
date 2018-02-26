import React from 'react';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
import Modal from './bookingmodal';

export default class StandardCalendar extends React.Component {

  constructor(props) {
    super(props);

    const { people } = props;

    this.state = {
      people: people,
      lastUid: 4,
      selectedIntervals: [
        {
          uid: 1,
          start: moment({h: 10, m: 5}),
          end: moment({h: 12, m: 5}),
          value: "Booked by Smith",
          hello: "hello"
        },
        {
          uid: 2,
          start: moment({h: 13, m: 0}).add(2,'d'),
          end: moment({h: 13, m: 45}).add(2,'d'),
          value: "Closed"
        },
        {
          uid: 3,
          start: moment({h: 11, m: 0}),
          end: moment({h: 14, m: 0}),
          value: "Reserved by White"
        },
      ]
    }
  }

  handleEventRemove = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals.splice(index, 1);
      this.setState({selectedIntervals});
    }

    console.log(index, selectedIntervals)

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

    this.setState({
      selectedIntervals: selectedIntervals.concat(intervals),
      lastUid: lastUid + newIntervals.length
    })
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
