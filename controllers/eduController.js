const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/userSchema')

const postView = async (req, res) => {

    const user = new User({
        institutionName: req.body.institutionName,
        passingDegreeName: req.body.passingDegreeName,
        passingYear: req.body.passingYear,
        address: req.body.address
    });
    try {
        const saveUser = await user.save();
        res.send(saveUser);
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = { postView }