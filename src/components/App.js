import { useEffect, useState } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';

import { nanoid } from 'nanoid';

const getContacts = () => {
  const savedContacts = localStorage.getItem('contacts-list');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  } else {
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts-list', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert('The contact is already in list');
    } else {
      setContacts(prevState => [{ ...data, id: nanoid() }, ...prevState]);
    }
  };

  const changeFilter = value => setFilter(value);

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId =>
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));

  return (
    <div>
      <ContactsForm onContactAdd={addContact} />
      <ContactsFilter onFilter={changeFilter} />
      <ContactsList contacts={filterContacts()} onDelete={deleteContact} />
    </div>
  );
};
