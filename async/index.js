const { response } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', processRequest);

function processRequest(request, response) {
   readText(request, response)
   console.log('requisição terminou');
}

function readText(request, response) {
   fs.readFile('teste.txt', 'utf8', function (err, data) {
      if (err) {
         console.log(err);
         return response.sendStatus(500).send('Erro ao ler o arquivo');
      }
      response.write(data);
      response.end();
      console.log('File read');
   });
   console.log('Lendo o arquivo aguarde...')
}

app.listen(3000);