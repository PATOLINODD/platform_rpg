document.addEventListener("DOMContentLoaded", function () {
  const saveCharacter = document.getElementById("saveCharacter");

  const socket = new WebSocket("ws://localhost:6969");

  socket.addEventListener("open", function (event) {
    console.log("WebSocket connection opened");
    getListCharacters();
  });

  socket.addEventListener("message", function (event) {
    console.log("Received message from server:");
    console.log(event.data);
  });

  socket.addEventListener("error", function (event) {
    console.error("WebSocket error:", event);
  });

  socket.addEventListener("close", function (event) {
    console.log("WebSocket connection closed");
  });

  saveCharacter.addEventListener("click", function (event) {
    event.preventDefault();
    saveNewCharacter();
  });

  function getListCharacters() {
    const message = {
      path: "/listCharacters",
    };
    socket.send(JSON.stringify(message));
  }

  function saveNewCharacter() {
    localStorage.setItem(character.getName(), character.getImage());

    const message = {
      path: "/saveCharacter",
      data: character,
    };
    socket.send(JSON.stringify(message));
  }
});

function backToLogin() {
  window.location.href = "../../index.html";
}
