const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')


async function login(emailAddress, password) {
    logger.debug(`auth.service - login with emailAddress: ${emailAddress}`)
    const user = await userService.getByUserEmail(emailAddress)
    if (!user) return Promise.reject('Invalid emailAddress or password')
    delete user.password
    return user
}

async function signup(firstName, emailAddress, password) {
    const saltRounds = 10
    logger.debug(`auth.service - signup with emailAddress: ${firstName}, firstName: ${emailAddress}`)
    if (!firstName || !emailAddress || !password) return Promise.reject('firstName, emailAddress and password are required!')
    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ firstName, password: hash, emailAddress})
}

module.exports = {
    signup,
    login,
}