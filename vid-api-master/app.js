const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const patientRoutes = require("./routes/patientRoutes");
const factureRoutes = require("./routes/factureRoutes");
const acteRoutes = require("./routes/acteRoutes");

const cors=require("cors");
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.use(bodyParser.json());


app.use(express.urlencoded({ extended: true }));

app.use("/api/acte", acteRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/facture", factureRoutes);

module.exports = app;