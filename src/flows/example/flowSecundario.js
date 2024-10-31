// src/flows/flowSecundario.js
const { addKeyword } = require('@bot-whatsapp/bot');

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario']);

module.exports = flowSecundario; // Exporta el flujo
