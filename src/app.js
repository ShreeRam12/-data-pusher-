const express = require("express");
const bodyParser = require("body-parser");
const accountRoutes = require("./routes/accountRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const dataHandlerRoutes = require("./routes/dataHandlerRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api", accountRoutes);
app.use("/api", destinationRoutes);
app.use("/api", dataHandlerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
