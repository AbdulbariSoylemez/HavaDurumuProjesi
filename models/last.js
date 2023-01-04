import mongoose from "mongoose";

const{Schema} = mongoose

const lastSchema = new Schema({

    city:{
        type:String,
            
    },
    dates:{
        type:Array
    }
});

const Last = mongoose.model('last_weather',lastSchema);

export default Last;