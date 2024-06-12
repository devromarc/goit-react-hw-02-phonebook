import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    });
    console.log(this.state.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name: prevState.name }],
      name: '', // Clear the input after submission
    }));
  };

  render() {
    const { contacts, name } = this.state;
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
            <button type="submit">Submit</button>
          </form>
        </div>

        <div>
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>{contact.name}</li>
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
