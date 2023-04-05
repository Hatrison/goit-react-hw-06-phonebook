import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Header, SectionHeader } from './App.styled';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(addContact(values));
  };

  const onChange = event => {
    const { value } = event.target;
    console.log(value);
    dispatch(updateFilter(value));
  };

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      <Header>Phonebook</Header>
      <ContactForm onSubmit={onSubmit} />

      <SectionHeader>Contacts</SectionHeader>
      <Filter onChange={onChange} />
      <ContactList contacts={visibleContacts} onDelete={onDelete} />
    </div>
  );
};
