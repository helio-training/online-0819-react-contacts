import React, { Component } from 'react'
import { CONTACTS_URL } from '../../config'

class ContactForm extends Component {
    constructor(props){
        super(props)
        if(props.contact){
            this.state = {
                name: props.contact.name,
                email: props.contact.email,
                phone: props.contact.phone
            }
            this.action = "PUT"
            this.path = `/${props.id}`
            this.btnText = 'Update'
        }else {
            this.state = {
                name: '',
                email: '',
                phone: ''
            }
            this.isCreate = true
            this.action = "POST"
            this.path = ""
            this.btnText = 'Create'
        }
    }
    
    submitHandler = async (event) => {
        event.preventDefault()
        const data = {...this.state}
        console.log('submitted state', data)
        const response = await fetch(`${CONTACTS_URL}${this.path}`, {
            method: this.action,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const jsonResults = await response.json()
        console.log('Contact Form Result', jsonResults)
        this.props.dataRefresh()
        if(this.isCreate){
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        } else{
            this.props.closeModal()
        }
        
    }
    changeHandler = ({target}) => {
        console.log('target', target)
        this.setState({
            [target.name] : target.value
        })
    }
    render () {
        console.log('Contact form Rendering')
        return (
            <form 
                className="form"
                onSubmit={this.submitHandler}
            >
                <label htmlFor="name">
                    Enter Contact's Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.changeHandler}
                    placeholder="Contact's Name"
                    value={this.state.name}
                    required />
                <label htmlFor="email">
                    Enter Contact's Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.changeHandler}
                    pattern="([A-Za-z0-9][._]?)+[A-Za-z0-9]@[A-Za-z0-9]+(\.?[A-Za-z0-9]){2}\.(com?|net|org)+(\.[A-Za-z0-9]{2,4})?"
                    placeholder='username@email.com'
                    value={this.state.email}
                    required />
                <label htmlFor="phone">
                    Enter Contact's Phone Number:
                </label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    onChange={this.changeHandler}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder='123-456-7890'
                    value={this.state.phone}
                    required />
                <button>{this.btnText} Contact</button>
            </form>
        )
    }
}

export default ContactForm