const mongoose = require('mongoose');

const URI= 'mongodb+srv://pedro:12345@cluster0.wlhljkx.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI)
.then(db => console.log('Base de datos conectada'))
.catch(err => console.error(err));

module.exports = mongoose;