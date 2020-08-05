/* eslint-disable no-console */
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send({ message: 'Endpoint working successfully' });
});

app.listen(3000, () => console.log('App listening on port 3000!'));