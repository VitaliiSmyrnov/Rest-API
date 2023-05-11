const mongoose = require("mongoose");
require("colors");

const app = require("./app");

const { DB_HOST, PORT = 5050 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Database connection successful. Server is running on port ${PORT}`
          .green.bold.italic
      );
    });
  })
  .catch((error) => {
    console.log(error.message.red.bold);
    process.exit(1);
  });
