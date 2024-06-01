const express = require("express");
const app = express();

const mongoose = require("mongoose");
const PORT = 6000;

const {MONGOURI} = require("./keys");

mongoose.set("strictQuery", false);
mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected Successfully'))
.catch((err) => { console.error(err); });

// mongoose.connection.on("connected", () => {
//     console.log("connected to database");
// });

// mongoose.connection.on("error", (err) => {
//     console.log("error: ", err);
// });
app.use(express.json());
require("./models/User");
require("./models/elegen");


app.use(require("./routes/auth"));
app.use(require("./routes/electricity"));


 
app.listen(PORT, () => {
    console.log("server is running at port ", PORT);
})