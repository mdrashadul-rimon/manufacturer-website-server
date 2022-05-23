const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('The Server is Ready for Elevator Manufacturer Inc.')
  })
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })