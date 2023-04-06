import React from 'react';
import { List, Text } from './ContactList.styled';
import DeleteButton from 'components/DeleteButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <Text>
            {contact.name}: {contact.number}
          </Text>
          <DeleteButton onDelete={onDelete} id={contact.id} />
        </li>
      ))}
    </List>
  );
};

export default ContactList;
