const router = require("express").Router();
const mongoose = require('mongoose')

const { postView } = require('../controllers/eduController')

router.post("/edu", postView);

module.exports = router;