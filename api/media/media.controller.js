const mediaService = require('./media.service.js');
const logger = require('../../services/db.service')


module.exports = {
  getMedias,
  getMediaById,
}


async function getMedias(req, res) {
  try {
    var queryParams = req.query;
    const medias = await mediaService.query(queryParams)
    res.json(medias);
  } catch (err) {
    res.status(500).send({ err: 'Failed to get medias' })
  }
}


async function getMediaById(req, res) {
  try {
    const mediaId = req.params.id;
    const media = await mediaService.getById(mediaId)
    res.json(media)
  } catch (err) {
    logger.error('Failed to get media', err)
    res.status(500).send({ err: 'Failed to get media' })
  }
}

