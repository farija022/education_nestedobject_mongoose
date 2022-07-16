const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})
const institutionalDetailsSchema = new mongoose.Schema({
    institutionName: {
        type: String,
        required: true
    },
    passingDegreeName: {
        type: String,
        required: true
    },
    passingYear: {
        type: Number,
        required: true
    },
    address: addressSchema
})
const userSchema = new mongoose.Schema({
    educationalQualifications: institutionalDetailsSchema,

});


module.exports = mongoose.model('Education', userSchema)