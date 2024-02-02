const { characterController } = require("../controller");
module.exports = (wss) => {
	wss.on('connection', async function connection(ws) {
		ws.on('message', async function incoming(message) {
			console.log('received: %s', message);
			try {
				const msg = JSON.parse(message);
				let messageReturn = {};
				if (msg.path === '/saveCharacter') {
					messageReturn = await characterController.saveCharacter(msg.data);
				}
				if (msg.path === '/listCharacters') {
					messageReturn = await characterController.listCharacters();
				}
				if (msg.path === '/getCharacter') {
					messageReturn = await characterController.getCharacterByID();
				}
				if (msg.path === '/updateCharacter') {
					messageReturn = await characterController.updateCharacterByID();
				}
				ws.send(JSON.stringify(messageReturn));
			} catch (error) {
				console.error(error.message);
			}
		});
		console.log("conectou!");
	});
}