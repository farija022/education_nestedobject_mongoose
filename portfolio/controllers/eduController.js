const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/userSchema')

const postView = async (req, res) => {

    const user = new User({
        educationalQualifications: req.body.educationalQualifications,

    });
    try {
        const saveUser = await user.save();
        res.send(saveUser);
        if (saveUser) {
            res.json({
                _id: saveUser._id,
                educationalQualifications: saveUser.educationalQualifications,
            })
        }
    } catch (err) {
        res.status(400).send(err);
    }
}

const putView = async (req, res) => {

    const user = await User.findOne({ _id: req.params.id })
    // console.log(user)
    // res.send(user)

    // let data = user[0]
    // console.log(data)

    // res.send(data.institutionName)

    if (user) {
        user.educationalQualifications = req.body.educationalQualifications || user.educationalQualifications
        // data.passingDegreeName = req.body.passingDegreeName || data.passingDegreeName,
        // data.passingYear = req.body.passingYear || data.passingYear,
        // data.address = req.body.address || data.address

        try {
            const updatedUser = await user.save()
            console.log("done")
            res.json({
                _id: updatedUser._id,
                educationalQualifications: updatedUser.educationalQualifications
                //     passingDegreeName: updatedUser.passingDegreeName,
                //     passingYear: updatedUser.passingYear,
                //     address: updatedUser.address
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