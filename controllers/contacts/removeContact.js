const { Contact } = require("../../models");
const { HttpError, ctrlWrapper } = require("../../helpers");

const removeContact = async (req, res) => {
  const id = req.params.contactId;
  const deletedContact = await Contact.findByIdAndDelete(id);

  if (!deletedContact) {
    throw HttpError(404, "Not found");
  }
  
  res.json({ code: 200, message: "contact deleted" });
};

module.exports = ctrlWrapper(removeContact);
