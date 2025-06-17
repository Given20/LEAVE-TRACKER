const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/api', require('./routes/index'));

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/dashboard.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});