const { characterController } = require("../controller");
module.exports = (wss) => {
  wss.on("connection", async function connection(ws) {
    ws.on("message", async function incoming(message) {
      console.log("received: %s", message);
      try {
		
        const msg = JSON.parse(message);
        let messageReturn = {};

        switch (msg.path) {
          case "/saveCharacter":
            messageReturn = await characterController.saveCharacter(msg.data);
            break;
          case "/listCharacters":
            messageReturn = await characterController.listCharacters();
            break;
          case "/getUserByNamePass":
            messageReturn = await characterController.getUserByNamePass(
              msg.data
            );
            break;
          case "/updateCharacter":
            messageReturn = await characterController.updateCharacterByID(
              msg.data
            );
            break;
        }

        ws.send(JSON.stringify(messageReturn));
      } catch (error) {
        console.error(error.message);
      }
    });
    console.log("conectou!");
  });
};
