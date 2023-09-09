const express = require('express');
const sequelize = require('./lib/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});