import React from 'react'
import { CONTACTS_URL } from '../../config'

export const DeleteContact = (props) => {
    const deleteContact = async () =>{
        const result = await fetch(`${CONTACTS_URL}/${props.id}`, {
            method: "DELETE"
        })
        console.log(result)
        props.dataRefresh()
    }
    return (
            <div>
                <button className="red button" onClick={deleteContact}>
                    Delete
                </button>
            </div>
            
        )
}