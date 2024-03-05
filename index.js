const WebSocket = require('ws');
const routes = require("./src/routes/index.js");
const db = require("./connectDatabase.js");

const wss = new WebSocket.Server({ port: 6969 });


routes(wss);

(async () => {
	try {
		await db.sync();
		// await db.drop();
		console.log('all tables was synchronized');
	}
	catch (error) {
		console.log(error);
	}
})();

db.authenticate();

