import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Header, SectionHeader } from './App.styled';
import Filter from './Filter';

export const App = () => {
  return (
    <div>
      <Header>Phonebook</Header>
      <ContactForm />

      <SectionHeader>Contacts</SectionHeader>
      <Filter />
      <ContactList />
    </div>
  );
};
