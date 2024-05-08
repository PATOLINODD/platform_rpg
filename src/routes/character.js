const { characterController } = require("../controller");
module.exports = (io, app) => {
  io.on("connection", async function connection(socket) {
    socket.on("updateCharacter", async function incoming(message) {
      console.log("received: %s", message);
      try {
        const msg = JSON.parse(message);
        let messageReturn = {};

        messageReturn = await characterController.updateCharacterByID(msg.data);

        io.emit("updateCharacter", messageReturn);
      } catch (error) {
        console.error(error.message);
      }
    });
  });

  app.get("/listCharacters", async (req, res) => {
    try {
      const messageReturn = await characterController.listCharacters();
      res.status(messageReturn.code).json(messageReturn);
    } catch (error) {
      console.error(error.message);
    }
  });

  app.get("/getCharacter/:id", async (req, res) => {
    try {
      const messageReturn = await characterController.getByID(req.params.id);
      res.status(messageReturn.code).json(messageReturn);
    } catch (error) {
      console.error(error.message);
    }
  });

  app.post("/saveCharacter", async (req, res) => {
    try {
      const messageReturn = await characterController.saveCharacter(req.body);
      res.status(messageReturn.code).json(messageReturn);
    } catch (error) {
      console.error(error.message);
    }
  });
};
