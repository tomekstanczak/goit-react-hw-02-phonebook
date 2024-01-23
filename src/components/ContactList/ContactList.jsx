const ContactList = ({ filteredList, onClick }) => {
  return (
    <ul>
      {filteredList.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => onClick(contact.id)}
            name="delete"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
