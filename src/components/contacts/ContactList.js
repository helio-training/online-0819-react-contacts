import React, { useState } from 'react'
import { CONTACTS_URL } from '../../config'

export default () => {
    const [contacts, setContacts] = useState([])
    
    fetch(CONTACTS_URL)
        .then((response) => response.json())
        .then((body) => body.map(contact => <li>{contact.name}</li>))
        .then(contactArray => setContacts(contactArray))
    return (
        <div>
            Contacts List
            <ul>
                {contacts}
            </ul>
        </div>
    )
}