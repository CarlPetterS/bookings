import React, { Component } from 'react';

class SelectEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.state.selectedEmployee };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.update({...this.props, state: {...this.props.state, selectedEmployee: event.target.value}})
    this.setState({value: event.target.value});
  }

  render() {
    const { people } = this.props
    const employees = people.filter(e => e.employee.length > 0)

    return (
      <form className="navbar-form navbar-right">
        <div className="form-group">
          <label className="user-description">Employee: </label>
          <select className="form-control user-select" value={this.state.value} onChange={this.handleChange}>
            {employees.map((person, i) =>(<option key={i} value={person.employee[0].id}>{person.name}, {person.employee[0].position}</option>))}
          </select>
        </div>
      </form>
    );
  }
}

export default SelectEmployee;