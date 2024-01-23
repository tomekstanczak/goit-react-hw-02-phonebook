import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Contacts.module.css';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: '',
    };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  addContact = evt => {
    evt.preventDefault();
    const name = this.state.name;
    const prevState = this.state.contacts;
    const newContact = {
      id: nanoid(),
      name,
    };
    this.setState({
      contacts: [...prevState, newContact],
    });
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Phonebook</h1>
        </div>
        <form onSubmit={this.addContact}>
          <label className={css.nameLabel}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <button type="submit">Add contact</button>
          </label>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
