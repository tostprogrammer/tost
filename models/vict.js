const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Schema = new schema({
	ip: {
		type: String,
		require: true,
	},
	date: {
		type: Date,
		require: true,
	},
});

const Vict = mongoose.model("vict", Schema);
module.exports = Vict;
