const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/userSchema')

const postView = async (req, res) => {

    const user = new User({
        educationalQualifications: req.body.educationalQualifications,

    });
    try {
        const saveUser = await user.save();
        console.log(saveUser);
        if (saveUser) {
            res.json({
                _id: saveUser._id
            })
        }
    } catch (err) {
        res.status(400).send(err);
    }
}

const putView = async (req, res) => {

    const user = await User.findOne({ _id: req.params.id })

    if (user) {
        user.educationalQualifications = req.body.educationalQualifications || user.educationalQualifications


        try {
            const updatedUser = await user.save()
            console.log("done")
            res.json({
                _id: updatedUser._id,
                educationalQualifications: updatedUser.educationalQualifications

            })
        } catch (err) {
            res.send(err)
        }
    } else {
        res.status(404);
        throw new Error("User not found")
    }

}


module.exports = { postView, putView }