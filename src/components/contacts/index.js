import React, { useState, useEffect } from 'react'
import ContactList from './ContactList'
import { Contact } from './Contact'
import ContactForm from './ContactForm'

import { CONTACTS_URL } from '../../config'

export default () => {
    //const [stateName, setStateFunc] = useState(initialState)
    const [contacts, setContacts] = useState([])
    const getContacts = () => {
        fetch(CONTACTS_URL)
            .then((response) => response.json())
            .then((body) => body.map(contact => (
                        <Contact 
                            data={contact} 
                            dataRefresh={getContacts}/>
                    )
                )
            )
            .then(contactArray => setContacts(contactArray))
            .then(() => console.log('Fetching contacts'))
    }
    useEffect(() => {
        getContacts()
    }, [])
    return (
        <div>
            <p>Hello from /components/contacts/index.js</p>
            <ContactForm dataRefresh={getContacts}/>
            <ContactList data={contacts}/>
        </div>
    )
}