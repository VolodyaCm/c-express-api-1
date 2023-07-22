import 'dotenv/config';
import app from './src/server';

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
