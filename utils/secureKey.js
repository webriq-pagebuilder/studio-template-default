const CryptoJS = require('crypto-js')

const {SANITY_STUDIO_SECRET_KEY} = process.env

export const encryptKey = (Key) => {       
    let cipherText = CryptoJS.AES.encrypt(Key, SANITY_STUDIO_SECRET_KEY).toString()   
    return cipherText
}

export const decryptKey = (cipherText) => {
    let bytes = CryptoJS.AES.decrypt(cipherText, SANITY_STUDIO_SECRET_KEY)
    return bytes.toString(CryptoJS.enc.Utf8)
}