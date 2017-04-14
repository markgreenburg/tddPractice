const Contact = require('../src/Contact');

describe('Contact', () => {
    const testContact = Contact("Bob", "Dole");
    it("Should be able to print the full name", () => {
        expect(testContact.getFullName()).toBe("Bob Dole");
    });
});