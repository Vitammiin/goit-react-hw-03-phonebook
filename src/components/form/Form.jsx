import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleName = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleNumber = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onFormSubmit(name, number); // Передаем данные в родительский компонент
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <div className="add-input">
          <p className="name">Name</p>
          <div>
            <input
              onChange={this.handleName}
              className="inpu"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
            />
          </div>
          <div>
            <p className="name">Number</p>
            <input
              onChange={this.handleNumber}
              className="inpu"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
            />
          </div>
          <button className="add" onClick={this.handleSubmit}>
            add contact
          </button>
        </div>
      </div>
    );
  }
}
