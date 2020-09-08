const botRouter = require('express').Router();
const WhatsappBot = require('../controllers/WhatsappBot');

botRouter.get('/hi', WhatsappBot.hi);
botRouter.post('/incoming', WhatsappBot.exampleMsg);

module.exports = botRouter;
