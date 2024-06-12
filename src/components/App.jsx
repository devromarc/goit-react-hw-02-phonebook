import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
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

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <div>
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
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

// export const App = () => {
//   return (
//     <div>
//       romarc
//     </div>
//   );
// };
