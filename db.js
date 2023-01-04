import mongoose from 'mongoose';

const conn = () =>{
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DB_URI,{
       dbName:"weather",
       useNewUrlParser: true,
       useUnifiedTopology: true,
    }).then(()=>{
        console.log("Connected to the DB successfully")
    }).catch((err) =>{
        console.log(`DB connection err: ${err}`)
    });
};

export default conn;