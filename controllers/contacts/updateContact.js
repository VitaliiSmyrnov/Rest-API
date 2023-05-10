const { Contact } = require("../../models");
const { HttpError, ctrlWrapper } = require("../../helpers");

const updateContact = async (req, res) => {
  const id = req.params.contactId;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedContact) {
    throw HttpError(404, "Not found");
  }
  
  res.json({ code: 200, data: updatedContact });
};

module.exports = ctrlWrapper(updateContact);
