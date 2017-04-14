'use strict';

const Contact = (first, last) => {
    let state = {
        first,
        last,
    };
    return Object.assign(
        {},
        getFullName(state)
    );
}

/* Contact functionality */
const getFullName = (state) => ({
    getFullName: () => {
        return state.first + " " + state.last;
    }
});

module.exports = Contact;