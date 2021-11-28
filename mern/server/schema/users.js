const mongoose= require('mongoose');
const Db = process.env.ATLAS_URI;
mongoose.connect(Db);

var db=mongoose.connection;
db.on('erro',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("users success")

const userSchema= new mongoose.Schema({
Username: {
    type:String,
    required:true
},

Password: {
    type:String,
    required:true
}
})

const usercons = new mongoose.model("users",userSchema);
module.exports = usercons;

var u1 = [{
Username:"Adminitrator",
Password:"cfk89hJH221"
}];

usercons.collection.insertOne(u1,function(err,docs){
    if(err){
        return console.error(err);
    }
    else{
      console.log("User inserted")
    }
})

})
