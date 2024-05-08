const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const routes = require("./src/routes/index.js");
const db = require("./connectDatabase.js");


const app = express();
const server = createServer(app);
const io = new Server(server);



routes(io, app);

(async () => {
	try {
		await db.sync();
		console.log('all tables was synchronized');
	}
	catch (error) {
		console.log(error);
	}
})();

db.authenticate();

server.listen(3000, console.log("server is running at port 3000!"));