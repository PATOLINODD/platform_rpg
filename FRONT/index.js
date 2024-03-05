const login = {
  name: "",
  password: "",
};

function continueHistory() {
	const message = { 
		path: "/getUserByNamePass",
		data: login,
	}
	socket.send(JSON.stringify(message));
}

function newCharacter() {
  //redirect user to another page;
  window.location.href = "./src/newcharacter/newCharacter.html";
}

function handleName(input) {
  loadImageByName(input);
  getInput(input);
}
function getInput(input) {
  login[input.name] = input.value;
}
