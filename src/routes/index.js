const characterRoute = require("./character.js");

module.exports = (wss) => {
	characterRoute(wss);
}