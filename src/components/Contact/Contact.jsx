import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { UserData, DeleteBtn } from './ContactStyled';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <UserData>{contact.name.toUpperCase()}</UserData>
      <UserData>{contact.number}</UserData>
      <DeleteBtn onClick={() => dispatch(deleteContact(contact.id))}>
        Delete contact
      </DeleteBtn>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
