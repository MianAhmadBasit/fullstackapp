const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ahmad:Ahmad.321@ahamddev.vcfjp.mongodb.net/?retryWrites=true&w=majority&appName=ahamddev', {
     serverSelectionTimeoutMS: 5000,
})
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

module.exports = mongoose;