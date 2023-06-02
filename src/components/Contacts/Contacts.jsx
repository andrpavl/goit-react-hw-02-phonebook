import { Component } from 'react';

export class Contacts extends Component {
    render() {
        const { contacts } = this.props;
    return (
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact}</li>
        ))}
      </ul>
    );
  }
}
