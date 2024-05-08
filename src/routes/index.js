const characterRoute = require("./character.js");

module.exports = (wss, app) => {
	characterRoute(wss, app);
}