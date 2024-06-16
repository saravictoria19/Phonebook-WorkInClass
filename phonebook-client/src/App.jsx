import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import {fetchContacts} from './services/contactServise';
import membrete from './assets/membrete.png';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  //Función para obtener los contactos desde el servidor
  const getContacts = async () => {
    const contacts = await fetchContacts();
    setContacts(contacts);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <img src={membrete} alt="membrete" />
      <h1>Phonebook</h1>
      <h4>Add a new contact</h4>
      <ContactForm
        fetchContacts={getContacts}
        currentContact={currentContact}
        setCurrentContact={setCurrentContact}
      />
      <ContactList
        contacts={contacts}
        fetchContacts={getContacts}
        setCurrentContact={setCurrentContact}
      />
    </div>
  );
};

export default App;