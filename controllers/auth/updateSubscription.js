const { User } = require("../../models");
const { HttpError, ctrlWrapper } = require("../../helpers");

const updateUser = async (req, res) => {
  const id = req.user._id;
  const updatedSubscription = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedSubscription) {
    throw HttpError(404, "Not found");
  }

  res.json({ code: 200, user: updatedSubscription });

  // const { email, subscription } = req.user;

  // res.json({
  //   code: 200,
  //   user: {
  //     email,
  //     subscription,
  //   },
  // });
};

module.exports = ctrlWrapper(updateUser);
