const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

mongoose.set('strictQuery', true);
mongoose.connect(
  "mongodb+srv://dev:B7CAnVjh5BEUWPtu@cluster0.pxyhron.mongodb.net/todos",
);

app.use("/", routes);

function startServer(port) {
    app.listen(port, () => {
        console.log(`App started on http://localhost:${port}`);
    });
}

module.exports = {
    startServer
};
