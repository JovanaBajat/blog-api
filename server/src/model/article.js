import mongoose from 'mongoose';

const article = new mongoose.Schema({
  title : {type : String, required : true},
  text : {type : String, required : true},
  author : {type : String, required : true}
  // date : {type : Date, default : Date.now}
},
{
  versionKey : false
});

export default mongoose.model("Article", article, "Articles");
