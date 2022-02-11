const mongoose = require('mongoose');
async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/health-band');
        console.log('Connect successful!');
    }catch(err){
        console.log("Connect fail");
    }
}
module.exports = {connect};