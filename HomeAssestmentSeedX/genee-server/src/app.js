import express from 'express';
import { MockData } from './MockData.js';
import { cors } from './corsMiddleware.js'

const hostname = '127.0.0.1';
const port = 8080;

const app = express();
app.use(cors);

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(MockData));
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});