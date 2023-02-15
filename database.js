const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const database = mongoose.connection;
database.once("open",()=>{
    console.log('db bağlandı')
});
const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
} 
module.exports = {
    connectDB
}