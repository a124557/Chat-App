const mongoose = require('mongoose');

const db = async () => {
  try  {
    await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); 


console.log('Database connected');
} catch(err) {
    console.log("Error has occured: ${error.message)");
    process.exit();
    }   
};

module.exports = db;