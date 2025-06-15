const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const goalRoutes = require('./routes/goals.routes');

dotenv.config({ path: '.env' });

const { PORT, CLIENT_PORT } = process.env;

const SERVER = PORT || 5000;
const connectDb = require("./config/db.connect");
// const taskSeeder = require('./utils/seeders/task'); /* seed tasks */

connectDb();

const corsOption = {
  origin: CLIENT_PORT,
  method: ["GET", "PUT", "POST", "DELETE"],
};

app.use(cors(corsOption));
app.use(express.json());

app.use('/api', goalRoutes);

app.listen(SERVER, () => {
  console.log(`Server running on PORT ${SERVER}`);
});

// taskSeeder();
