import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    search: '',
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    });
    // console.log(this.state.name);
  };

  handleNumberChange = e => {
    this.setState({
      number: e.target.value,
    });
    // console.log(this.state.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: prevState.name, number: prevState.number },
      ],
      name: '',
      number: '',
    }));
  };

  handleSearchChange = e => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const { contacts, name, number, search } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Name</p>
              <input
                type="text"
                name="name"
                // add \ before - in [' \-] to make it work (LMS)
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                required
                value={name}
                onChange={this.handleNameChange}
              />
            </label>
            <label>
              <p>Telephone</p>
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={this.handleNumberChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div>
          <h2>Contacts</h2>
          <label>
            <p>Search Contacts</p>
            <input
              type="text"
              value={search}
              onChange={this.handleSearchChange}
            />
          </label>
          <ul>
            {filteredContacts.map((contact, index) => (
              <li key={index}>
                <p>
                  {contact.name}: {contact.number}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
