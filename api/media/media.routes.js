const express = require('express')
const { log } = require('../../middlewares/logger.middleware')
const { getMedias, getMediaById } = require('./media.controller')
const router = express.Router()


router.get('/', log, getMedias)
router.get('/:id', getMediaById)

module.exports = router

