const router = require("express").Router();
const mongoose = require('mongoose')

const { postView, putView } = require('../controllers/eduController')

router.post("/edu", postView);
router.put("/:id", putView);

module.exports = router;