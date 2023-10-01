import React, { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  handleSumbit = (name, number) => {
    const { contacts } = this.state;
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

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleDeleteContact = contactName => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name !== contactName
      ),
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return {
      data: contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
      filter: filter,
    };
  };

  render() {
    const filteredContacts = this.filterContacts();

    return (
      <div>
        <div>
          <Form onFormSubmit={this.handleSumbit} />
        </div>
        <Contacts
          contacts={filteredContacts}
          onFilterChange={this.handleFilterChange}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
