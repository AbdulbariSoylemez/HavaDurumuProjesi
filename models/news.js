import mongoose from 'mongoose';

const {Schema} = mongoose

const newsSchema = new Schema({
  title:{
    type:String
    
  },
  url:{
    type:String
  },

  img:{ 
    type :String
  }
});

const News = mongoose.model('news',newsSchema);

export default News;

