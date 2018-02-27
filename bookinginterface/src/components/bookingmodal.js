import React from 'react';
import PropTypes from 'prop-types';
import FilteredMultiSelect from 'react-filtered-multiselect'
import moment from 'moment';

const propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  value: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const defaultProps = {
  value: '',
};


class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleRemove = () => {
    this.props.onRemove();
  }

  handleSave = () => {
    window.selected = this.state.selected;
    this.props.onSave({value:''});
  }

  renderText() {
    const {
      start,
      end,
    } = this.props;

    if (start.isSame(end, 'day')) {
      return (<span>{`${start.format('Do MMM., HH:mm')} - ${end.format('HH:mm')}`}</span>);
    }
    return (<span>{`${start.format('Do MMM.')} - ${end.format('Do MMM.')}, ${start.format('HH:mm')} - ${end.format('HH:mm')}`}</span>);
  }

  handleChange(id) {
    if (this.state.selected.find(p => p.value === id[0].value)) {
      return;
    };

    const newstate = {selected: [].concat(this.state.selected, id)}
    this.setState(newstate)
  }

  render() {
    const {
      value,
      start,
      end
    } = this.props;
    
    let options = window.props.people.map(person => ({
      value: person.id,
      text: person.employee.length > 0 ? `${person.name}, ${person.employee[0].position}` : `${person.name}, ${person.businessPartner[0].position} på ${person.businessPartner[0].company}`
    }))

    const duration = moment.duration(end.diff(start));
    const hours = duration.asHours();
    const room = window.props.rooms.find(r => r.id === window.props.state.selectedRoom)
    const cost = hours * (room.cost_per_hr) + (room.facilities.reduce((sum, fac) => fac.cost + sum,0))


    return (
      <div className="customModal">
        <div className="customModal__text"><h1>Book a room</h1></div>
        <div className="customModal__text">{this.renderText()}</div>
        
        <div className="participantselection">
          <form className="form-group">
            <label className="user-description">Select participants: </label>
            <FilteredMultiSelect className="form-select selectpicker"
              onChange={this.handleChange}
              options={options}
            />
          </form>
          <div className="selectedparticipants">
            {this.state.selected.map(person => <div key={person.value}>{person.text}</div>)}
          </div>
          <div>
            <a className="customModal__text" onClick={() => {this.setState({ selected: [] })}}>Click here to remove participants</a>
          </div>
        </div>
        <div className="infobox">
          <label className="user-description">Room information & pricing: </label>
          <p>Room: {room.name}</p>
          <p>Cost per hour: {room.cost_per_hr}$</p>
          <p>Facilities:</p>
          <ul>{room.facilities.map(f => <li key={f.id}>{f.name}, {f.cost}$</li>)}</ul>
          <p>duration: {hours} hours</p>
          <p>Total cost: {cost}$</p>
        </div>
        <div className="clearfix"/>
        <button className="customModal__button" onClick={this.handleRemove}>Delete</button>
        <button className="customModal__button customModal__button_float_right" onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;