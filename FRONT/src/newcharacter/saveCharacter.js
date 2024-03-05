document.addEventListener("DOMContentLoaded", function () {
  const saveCharacterDesktop = document.getElementById("saveCharacterDesktop");
  const saveCharacterMobile = document.getElementById("saveCharacterMobile");

  const socket = new WebSocket("ws://localhost:6969");

  socket.addEventListener("open", function (event) {
    console.log("WebSocket connection opened");
  });

  socket.addEventListener("message", function (event) {
    console.log("Received message from server:");
    const msg = JSON.parse(event.data);
    if(!msg.error)
    {
      window.location.href = "../party/party.html";
      return;
    } 
    alert("Isso não foi culpa sua. Recarregue a pagina e tente de novo!");
  });

  socket.addEventListener("error", function (event) {
    console.error("WebSocket error:", event);
  });

  socket.addEventListener("close", function (event) {
    console.log("WebSocket connection closed");
  });

  saveCharacterDesktop?.addEventListener("click", function (event) {
    event.preventDefault();
    saveNewCharacter();
  });
  saveCharacterMobile?.addEventListener("click", function (event) {
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
