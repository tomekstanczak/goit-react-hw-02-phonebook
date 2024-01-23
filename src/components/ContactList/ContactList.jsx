const ContactList = ({ filteredList }) => {
  return (
    <ul>
      {filteredList.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
