import { Contact } from 'components/Contact/Contact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectFilteredContacts,
  selectContacts,
} from 'redux/contacts/selectors';
import { List, ContactCard } from './contactListStyled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <List>
        {contacts.map(contact => {
          return (
            <ContactCard key={contact.id}>
              <Contact contact={contact}></Contact>
            </ContactCard>
          );
        })}
      </List>
      {isLoading && <b>Loading...</b>}
      {error && <b>{error}</b>}
    </>
  );
};
