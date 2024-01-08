const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const Datastore = require('nedb');

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

const db = new Datastore();
app.get('/', (req, res) => {
  res.send('Hello, this is the backend server!');
});
app.post('/api/submit-form', (req, res) => {
  const { fullName, contactNo, email, selectedService, selectedTeam } = req.body;

  db.insert({ fullName, contactNo, email, selectedService, selectedTeam }, (err, newDoc) => {
    if (err) {
      console.error('Error saving form data to database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Form data saved to database:', newDoc);
      res.json(newDoc);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
