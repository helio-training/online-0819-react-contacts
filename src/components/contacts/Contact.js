import React from 'react'

export const Contact = (props) => {
    const contact = props.data
    return (
        <div className="tableRow" key={contact._id}>
                <span>{contact.name}</span>
                <span>{contact.email}</span>
                {/* <DeleteContact/>
                <UpdateContact/> */}
        </div>
    )
}