const { Contact } = require("../../models");
const { ctrlWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const query = { owner };

  if (favorite) {
    query.favorite = true;
  }

  const allContacts = await Contact.find(query, "-createAt -updateAt", {
    skip,
    limit,
  });
  res.json(allContacts);
};

module.exports = ctrlWrapper(getAllContacts);
