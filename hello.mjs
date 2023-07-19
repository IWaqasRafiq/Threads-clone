console.log("this is express server hello world");

import express from 'express';
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log('Hello World!', new Date());
  res.send('Hello World!' + new Date());
})
app.get('/profile', (req, res) => {
  console.log('this is profile', new Date());
  res.send(`this is profile ab chal bhi ja${new Date()}`);
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})