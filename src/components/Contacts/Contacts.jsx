import React from 'react';

export default function Contacts({
  contacts,
  onFilterChange,
  onDeleteContact,
}) {
  return (
    <div>
      <p>Contacts</p>
      <input
        onChange={onFilterChange}
        value={contacts.filter}
        type="text"
        placeholder="Search contacts"
      />
      <ul>
        {contacts.data.map(contact => (
          <li className="list" key={contact.name}>
            {contact.name}: {contact.number}
            <button
              className="delete"
              onClick={() => onDeleteContact(contact.name)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
