const server = require('./src/app')

const mongoose = require('mongoose');
const db = process.env.MONGO_URI;
const port = process.env.PORT || 3001;

mongoose.connect(db)
.then(resp => {
    console.log('DB connected');
})
.catch(err => {
    console.log(err);
});

server.listen(port, () => {
    console.log('Server listening at 3001');
});