import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  handleSumbit = event => {
    event.preventDefault();
    const { contacts, name, number } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState({
        contacts: [...contacts, { name, number }],
        name: '',
        number: '',
      });
    }
  };
  handFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };
  handleDelete = contactName => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name !== contactName
      ),
    }));
  };

  filterNum = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
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
            />
          </div>
          <button className="add" onClick={this.handleSumbit}>
            add contact
          </button>
        </div>
        <div>
          <p>Contacts</p>
          <input
            onChange={this.handleFilterChange}
            value={this.state.filter}
            type="text"
            placeholder="Search contacts"
          />
          <ul>
            {this.state.contacts.map(contact => (
              <li className="list" key={contact.name}>
                {contact.name}: {contact.number}
                <button
                  className="delete"
                  onClick={() => this.handleDelete(contact.name)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
