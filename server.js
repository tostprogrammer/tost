const express = require("express");
const mongoose = require("mongoose");
const ip = require("ip");
const vict = require("./models/vict");
const PORT = 29934;

mongoose.connect(
	"mongodb+srv://aven:parola@cluster0.zoi2e.mongodb.net/experimental?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	}
);

const server = express();

server.get("/", (req, res) => {
	vict.findOne({ ip: ip.address() }).then((result) => {
		if (result) return res.end();

		const newVict = new vict({
			ip: ip.address(),
			date: new Date(),
		})
			.save()
			.then(() => res.status(200).send("ok"));
	});
});

server.listen(PORT);
