const calendarController = require("./controllers/calendar.controller");
const weatherController = require("./controllers/weather.controller");

const express = require("express");
const cors = require('cors');

const app = express();
const port = 4444;

app.use(cors());
app.use(express.static('../client'));
app.use("/api/weather", weatherController);
app.get("/", calendarController);

app.listen(port, () => console.log(`port ${port}`));