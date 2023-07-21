const app = require('./src/server.js');

const PORT = 3001;
const HOST = 'http://localhost';

app.listen(PORT, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
