const logger = require('../services/logger.service')

async function log(req, res, next) {
  logger.info('Req!!!')
  if (req.session && req.session.user) {
    logger.info('Req from: ' + req.session.user.firstName)
  }
  next()
}

module.exports = {
  log
}
