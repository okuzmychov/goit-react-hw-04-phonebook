import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
  contacts: [],
    filter: '',
  };

    componentDidMount() {
    const savedContscts = localStorage.getItem('contacts');
    if (savedContscts !== null) {
      this.setState({ contacts: JSON.parse(savedContscts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onSubmitForm = (newContact) => {
    const isDublicate = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (isDublicate) {
      toast.error(
        "Контакт з таким ім'ям або номером вже є в списку!",
        {
          position: 'top-center',
          autoClose: 2700,
          theme: 'colored',
        }
      );
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

 handleFiltrChange = value => {
    this.setState({ filter: value });
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);
    return (
      <Layout>
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={this.onSubmitForm} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} onFilterChange={this.handleFiltrChange} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
        </Section>
        
        <ToastContainer />
        <GlobalStyle />
      </Layout>
    );
  }
}
