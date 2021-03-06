import { Component } from 'react';
import Section from './Section/Section'
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export default class Phonebook extends Component {

    state = {
        contacts: [],
        filter: ''
    }


    componentDidMount(){
        const localContacts = localStorage.getItem('contacts')
        if(localContacts){
            this.setState(
                {
                    contacts: JSON.parse(localContacts)
                }
            )
        }
    }


    componentDidUpdate(prevProps, prevState){
        if(prevState.contacts !== this.state.contacts){
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
        }
    }


    addContact = (contact) => {
        this.setState(prevState => {
             return {
                contacts: [...prevState.contacts, ...contact]
            }  
        })
    }


    changeFilter = filter => {
        this.setState({ filter })
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    deleteContact = id => {
        this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== id) });
    };


    render() {
        const visibleContacts = this.getVisibleContacts();

        return (
            <div>
                <Section title='Phonebook'>
                    <Form onAddContact={this.addContact}></Form>
                </Section>
                <Section title='Contacts'>
                    <Filter value={this.state.filter} onChangeFilter={this.changeFilter}></Filter>
                    {visibleContacts.length > 0 ? <ContactsList contacts={visibleContacts} onRemove={this.deleteContact}></ContactsList> : <p>You need to add the first contact</p>
                    }
                </Section>
            </div>
        )
    }
}