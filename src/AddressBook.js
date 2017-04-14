'use strict';

const AddressBook = () => {
    let state = {
        contacts: [],
        initialComplete: false,
    };
    return Object.assign(
        {},
        getInitialContacts(state),
        getInitialComplete(state),
        getContact(state),
        addContact(state),
        deleteContact(state)
    );
}

/* Define address book functionality via standard functions */

/* Get list of initial contacts - Mock */
const getInitialContacts = (state) => ({
    getInitialContacts: (cb) => {
        // Setting timeout to mock an async call
        setTimeout(() => {
            state.initialComplete = true;
            if (cb) { return cb() }
        }, 3);
    }
});

/* Get status of initial contacts fetch */
const getInitialComplete = (state) => ({
    getInitialComplete: () => state.initialComplete
});

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