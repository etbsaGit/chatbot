// src/flows/flowDiscord.js
const { addKeyword } = require('@bot-whatsapp/bot');
const flowSecundario = require('./flowSecundario');

const flowDiscord = addKeyword(['discord']).addAnswer(
    ['🤪 Únete al discord', 'https://link.codigoencasa.com/DISCORD', '\n*2* Para siguiente paso.'],
    null,
    null,
    [flowSecundario]
);

module.exports = flowDiscord;
