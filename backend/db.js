const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Merndb:khan123@cluster0.mntri.mongodb.net/Mern?retryWrites=true&w=majority'
const connectToMongo = ()=>{
mongoose.connect(mongoURI).then(()=>{
console.log(`Connected to Mongo Successfully`);
}).catch((err) => console.log(`Connection deestablished`));
}
module.exports = connectToMongo;
