const contacts = require("../data/contacts");

const list = (req, res) => {
  res.json(contacts);
};

const show = (req, res) => {
  let contactId = parseInt(req.params.contactId);
  let contact = contacts.find((contact) => contact._id === contactId);

  res.send(contact);
};

const create = (req, res) => {
  let contact = req.body;
  contact._id = contacts.length + 1;

  contacts.push(contact);

  res.send(contacts);
};

module.exports = { list, show, create };
