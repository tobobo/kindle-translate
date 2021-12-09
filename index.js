const express = require('express');
const bodyParser = require('body-parser');
const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate({ key: 'AIzaSyC_df87kle4zCJqUPNswCGasUPscDYVuN8' });

const app = express();

app.post('/api/translate', bodyParser.json(), async (req, res) => {
  const { text, options } = req.body;
  const [,result] = await translate.translate(text, options);
  console.log('tarnslations', result);
  res.send(result);
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(8000);
