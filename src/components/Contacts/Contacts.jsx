import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Contacts.module.css';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      name: '',
      number: '',
      filter: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addContact = evt => {
    evt.preventDefault();
    const name = this.state.name;
    const number = this.state.number;
    const prevState = this.state.contacts;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState({
      contacts: [...prevState, newContact],
    });
    this.setState({
      name: '',
      number: '',
    });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.filterContacts();
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
          <label className={css.nameLabel}>
            Nubmer
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <button type="submit">Add contact</button>
          </label>
        </form>
        <div>
          <h2>Contacts</h2>
          <label className={css.nameLabel}>
            Find contacts by name
            <input
              type="text"
              name="filter"
              onChange={this.handleChange}
              value={this.state.filter}
            />
          </label>
          <ul>
            {filteredContacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
