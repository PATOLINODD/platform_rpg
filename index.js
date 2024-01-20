const app = require("./infra");
const db = require("./connectDatabase.js");

( async () => {
	try
	{
		//await db.sync({ force: true });
		//await db.drop();
		console.log('all tables was synchronized');
	}
	catch(error)
	{
		console.log(error);
	}
})();
db.authenticate();


app.listen(6969, console.log("app listening in port 6969"));