const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { HttpError, ctrlWrapper } = require("../../helpers");

const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "..", "..", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  if (!path || !originalname) {
    throw HttpError(400, "File is require!");
  }
  const filename = `${_id}_${originalname}`;

  try {
    const image = await Jimp.read(tempUpload);
    await image.resize(250, 250).write(tempUpload);
  } catch (error) {
    await fs.unlink(tempUpload);
    throw HttpError(
      400,
      "Unsupported type of image. Supported: jpeg, png, bmp, tiff, gif"
    );
  }

  const resultUpload = path.join(avatarsDir, filename);
  try {
    await fs.rename(tempUpload, resultUpload);
  } catch (err) {
    await fs.unlink(tempUpload);
    throw err;
  }

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    code: 200,
    avatarURL,
  });
};

module.exports = ctrlWrapper(updateAvatar);
