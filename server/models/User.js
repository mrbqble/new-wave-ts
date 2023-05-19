const {Schema, model} = require("mongoose");

const User = new Schema({
    city: String,
    code: String,
    type: String,
    photo: String,
    grade: String,
    degree: String,
    gender: String,
    school: String,
    country: String,
    telegram: String,
    firstName: String,
    instagram: String,
    secondName: String,
    dateOfBirth: String,
    affiliation: String,
    phoneNumber: String,
    volunteeringHours: Number,
    password: String,
    email: String,
    lastToken: String
});

module.exports = model('User', User);