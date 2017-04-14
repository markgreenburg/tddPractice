const AddressBook = require('../src/AddressBook');
const Contact = require('../src/Contact');

describe('Address Book', () => {
    let testBook;
    let testContact;

    beforeEach(() => {
        testBook = AddressBook();
        testContact = Contact("Bob", "Dole");
    });
    
    it("Should be able to add a contact", () => {
        testBook.addContact(testContact);
        expect(testBook.getContact(0)).toBe(testContact);
    });

    it("Should be able to delete a contact", () => {
        testBook.addContact(testContact);
        testBook.deleteContact(0);
        expect(testBook.getContact(0)).not.toBeDefined();
    });
});
