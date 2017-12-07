const monogoose = ("monogoose");
const Schema = monogoose.Schema;
const usersSchema = new Schema({
	name : String,
	email : String,
	age : Number

})
module.exports = monogoose.model("users", usersSchema );