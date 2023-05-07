const { Contact } = require("../../models");
const { ctrlWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const allContacts = await Contact.find({ owner }, "-createAt -updateAt", {
    skip,
    limit,
  });
  res.json(allContacts);
};

module.exports = ctrlWrapper(getAllContacts);
