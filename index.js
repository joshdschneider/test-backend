require('dotenv').config();

const port = process.env.PORT || 3001;
const express = require('express');
const app = express();
const { requireUser } = require('./middleware/auth');
const items = require('./routes/items');
const users = require('./routes/users');

app.use('/items', items);
app.use('/users', requireUser, users);

app.listen(port, () => console.log(`Server listening on port ${port}`));
