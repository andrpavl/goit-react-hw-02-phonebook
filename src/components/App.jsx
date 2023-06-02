import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  render() {
    return (
      <div>
        <Phonebook addContact={this.addContact} />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
