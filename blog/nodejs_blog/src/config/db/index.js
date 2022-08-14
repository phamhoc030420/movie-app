const mongoose = require('mongoose');
const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log('connect success');

    } catch (error) {
        console.log('error');
    }
}
module.exports = { connect };
