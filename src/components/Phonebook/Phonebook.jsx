import { Component } from 'react';

export class Phonebook extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    this.props.addContact(name);
    this.setState({ name: '' });
  };

  render() {
    const {name} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
