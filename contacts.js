const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    console.log(data.toString());
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const parsedData = JSON.parse(data);
    console.log(contactId);
    const contact = parsedData.find((contact) => contact.id === contactId);
    console.log(contact);

    // return parsedData.find(contact => contact.id === contactId);
  } catch (error) {
    console.log(error);
  }
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
