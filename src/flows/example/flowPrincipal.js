// src/flows/flowPrincipal.js
const { addKeyword } = require('@bot-whatsapp/bot');
const flowDocs = require('./flowDocs');
const flowGracias = require('./flowGracias');
const flowTuto = require('./flowTuto');
const flowDiscord = require('./flowDiscord');

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer('🙌 Hola bienvenido a este *Chatbot*')
    .addAnswer(
        [
            'te comparto los siguientes links de interes sobre el proyecto',
            '👉 *doc* para ver la documentación',
            '👉 *gracias*  para ver la lista de videos',
            '👉 *discord* unirte al discord',
        ],
        null,
        null,
        [flowDocs, flowGracias, flowTuto, flowDiscord]
    );

module.exports = flowPrincipal;
