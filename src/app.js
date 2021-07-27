const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const index = require("./routes/index.js");
const carros = require("./routes/carros-route");

app.use("/", index);
app.use("/carros", carros);
app.use((req, res, next) => {
    res.status(404).send({
      status: 404,
      error: "Not found",
    });
  });


// Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});