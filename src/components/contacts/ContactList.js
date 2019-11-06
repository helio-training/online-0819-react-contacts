import React from 'react'


export default (props) => {
    console.log('Rendering ContactList')
    
    return (
        <div>
            Contacts List
            <div className="table">
                {props.data}
            </div>
        </div>
    )
}