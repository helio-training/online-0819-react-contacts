import React from 'react'
import UpdateContact from './UpdateContact'
import { DeleteContact } from './DeleteContact'

export const Contact = (props) => {
    const contact = props.data
    return (
        <div className="tableRow" key={contact._id}>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <UpdateContact 
                id={contact._id} 
                dataRefresh={props.dataRefresh}
                contact={contact}/>
            <DeleteContact id={contact._id} dataRefresh={props.dataRefresh}/>
        </div>
    )
}