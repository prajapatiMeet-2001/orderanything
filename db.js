var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/orderanything', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true});
//DB CONNECTION
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connection established')
});