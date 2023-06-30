const { v4 } = require('uuid')
const config = require('config')
const { initializeApp } = require("firebase/app")
const { getStorage, ref, uploadString, getDownloadURL } = require("firebase/storage")

const app = initializeApp(config.get('firebaseConfig'))
const storage = getStorage(app)

const uploadImage = async (file, path) => {
  const fileRef = ref(storage, `${path}/${v4()}`)
  return await uploadString(fileRef, file, 'base64').then(async (res) => {
    return await getDownloadURL(res.ref).then(async (url) => {
      return url
    })
  })
}

module.exports = uploadImage