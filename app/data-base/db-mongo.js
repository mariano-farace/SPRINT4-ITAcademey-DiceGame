const mongoose = require('mongoose');
const config = require('../../config');

const mongoDb = config.MONGODB_URI;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('connected', () => console.log('Db connected'));
db.on('error', console.error.bind(console, 'mongo connection error'));
