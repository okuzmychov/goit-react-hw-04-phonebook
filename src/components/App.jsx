import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts !== null) setContacts(JSON.parse(contacts));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitForm = newContact => {
    const isDublicate = contacts.some(
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
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFiltrChange = filter => {
    setFilter(filter.toLowerCase());
  };

  // const filterContacts = () =>
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );


  const handleDeleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(el => el.id !== id));
  };

 
return (
  <>
    <Section title={'Phonebook'}>
      <ContactForm onSubmit={onSubmitForm} />
    </Section>
    <Section title={'Contacts'}>
      <Filter onFilterChange={handleFiltrChange} />
      {contacts.length ? (
        <ContactList
          contacts={contacts.filter(el =>
            el.name.toLowerCase().includes(filter)
          )}
          onDeleteContact={handleDeleteContact}
        />
      ) : (
        <p>No contacts</p>
      )}
    </Section>
    <ToastContainer />
  </>
);
};