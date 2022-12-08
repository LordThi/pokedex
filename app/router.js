
const express = require("express");
const mainController = require("./controllers/mainController");
const app = express();
const router = express.Router();

router.get("/", mainController.renderIndexPage);


module.exports = router;