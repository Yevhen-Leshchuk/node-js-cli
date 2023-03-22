const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    console.table(JSON.parse(data));
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const parsedData = JSON.parse(data);
    const contact = parsedData.find(
      (contact) => contact.id === contactId.toString()
    );
    console.log(contact);
    return contact;
  } catch (error) {
    console.log(error);
  }
}

async function addContact(id, name, email, phone) {
  try {
    let newContact = {
      id: id,
      name: name,
      email: email,
      phone: phone,
    };
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const newContactList = [...contacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(newContactList));
    listContacts();
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const parsedData = JSON.parse(data);
    const contactList = parsedData.filter(
      (contact) => contact.id !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(contactList));
    listContacts();
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
