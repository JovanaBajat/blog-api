import mongoose from 'mongoose';

const article = new mongoose.Schema({
  title : {type : String, required : true},
  text : {type : String, required : true, minlength: 50},
  author : {type : String, required : true},
  photo: { type: String, required: false }
  // date : {type : String, default : moment().format('YYYY-MM-DD, h:mm a')
// }
},
{
  versionKey : false
});

export default mongoose.model("Article", article, "Articles");
