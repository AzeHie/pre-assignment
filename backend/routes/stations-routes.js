const express = require("express");
const stationControllers = require ("../controllers/stations-controllers");
const router = express.Router();

router.get("/", stationControllers.getStations);

router.get("/add", stationControllers.addStation);

module.exports = router;