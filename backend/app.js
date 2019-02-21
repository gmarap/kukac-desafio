const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var originsWhitelist = [
    'http://localhost:4200'
  ];
  var corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
  }
  
  app.use(cors(corsOptions));

function calcularRenda(renda, dependentes){
    return parseFloat((renda/dependentes).toFixed(2));
}

function makeRequest(cep){
    return new Promise((resolve, reject) => {
        axios({
            method:'get',
            url: `https://api.postmon.com.br/v1/cep/${cep}`
        })
        .then(function(response) {
            resolve(response.data);
        }).catch(function(error) {
            reject(error);
        });
    });
}

app.post('/add-data', async function(req, res, next){
    
    const address = await makeRequest(req.body.cep);
    const answer = {};
    answer.nome = req.body.nome;
    answer.renda = calcularRenda(req.body.renda, req.body.dependentes);
    answer.endereco = {
        logradouro: address.logradouro,
        bairro: address.bairro,
        cidade: address.cidade,
        estado: address.estado
    }
    
    res.status(200).send(answer);
})

app.listen(3000);

