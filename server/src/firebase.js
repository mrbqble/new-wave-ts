const config = require('config')
const { initializeApp } = require("firebase/app")
const { getStorage } = require("firebase/storage")

const app = initializeApp(config.get('firebaseConfig'))
const storage = getStorage(app)

module.exports = storage