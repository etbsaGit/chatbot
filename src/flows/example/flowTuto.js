// src/flows/flowTuto.js
const { addKeyword } = require('@bot-whatsapp/bot');
const flowSecundario = require('./flowSecundario');

const flowTuto = addKeyword(['tutorial', 'tuto']).addAnswer(
    [
        '🙌 Aquí encontras un ejemplo rapido',
        'https://bot-whatsapp.netlify.app/docs/example/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
);

module.exports = flowTuto;
