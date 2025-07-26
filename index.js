// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const { createHandler } = require('azure-function-express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express on Azure Functions!');
});
