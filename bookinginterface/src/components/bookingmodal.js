import React from 'react';
import PropTypes from 'prop-types';

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
  handleRemove = () => {
    this.props.onRemove();
  }

  handleSave = () => {
    const { value } = this.input;
    this.props.onSave({
      value,
    });
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

  render() {
    const {
      value,
    } = this.props;

    const people = [];
    
    return (
      <div className="customModal">
        <div className="customModal__text"><h1>Book a room</h1></div>
        <div className="customModal__text">{this.renderText()}</div>
        <input
          ref={(el) => { this.input = el; }}
          className="customModal__input"
          type="text"
          placeholder="Enter something"
          defaultValue={value}
        />
        <form className="form-group">
            <label className="user-description">Select participants: </label>
            <select className="form-control user-select">
              {people.map((person, i) =>(<option key={i} value={person.employee[0].id}>{person.name}, {person.employee.length > 0 ? person.employee[0].position : `${person.businesspartner[0].position} på ${person.businesspartner[0].company}`}</option>))}
            </select>
        </form>
        <button className="customModal__button" onClick={this.handleRemove}>Delete</button>
        <button className="customModal__button customModal__button_float_right" onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;