// src/flows/flowDocs.js
const { addKeyword } = require('@bot-whatsapp/bot');
const flowSecundario = require('./flowSecundario');

const flowDocs = addKeyword(['doc', 'documentacion', 'documentación']).addAnswer(
    [
        '📄 Aquí encontras las documentación recuerda que puedes mejorarla',
        'https://bot-whatsapp.netlify.app/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
);

module.exports = flowDocs;
