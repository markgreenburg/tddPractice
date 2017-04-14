'use strict';

const AddressBook = () => {
    let state = {
        contacts: [],
    };
    return Object.assign(
        {},
        getContact(state),
        addContact(state),
        deleteContact(state)
    );
}

/* Define address book functionality via standard functions */

/* Get contact from address book */
const getContact = (state) => ({
    getContact: (id) => {
        return state.contacts[id];
    }
});

/* Takes a contact object and adds it to state */
const addContact = (state) => ({
    addContact: (contact) => {
        state.contacts = [ ...state.contacts, contact ];
    }
});

const deleteContact = (state) => ({
    deleteContact: (id) => {
        state.contacts = state.contacts
            .slice(0, id)
            .concat(state.contacts.slice(id + 1));
    }
});

module.exports = AddressBook;