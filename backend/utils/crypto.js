import CryptoJs from 'crypto-js'

export const encrypt = async (text)=>{
    const encrypted = await CryptoJs.AES.encrypt(text,process.env.KEY).toString()
    return encrypted
}
export const decrypt = async (cipherText) =>{
    const decrypted = await CryptoJS.AES.decrypt(cipherText,process.env.KEY)
    .toString(CryptoJS.enc.Utf8)
    return JSON.parse(decrypted)
 }