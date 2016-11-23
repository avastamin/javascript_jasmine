describe('Address Book',function () {
    var addressBook,
        thisContact;

    beforeEach(function () {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add address',function () {
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete address',function () {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).not.toBeDefined();
    })
});

describe('Aync Address Book', function () {
    it('It should grab initial contacts', function () {
        var addressBook = new AddressBook();
        addressBook.getinitialContacts(function () {
            expect(addressBook.initialComplete).toBe(true);
        });

    })
})