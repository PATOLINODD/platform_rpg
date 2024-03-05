let socket = null;
document.addEventListener("DOMContentLoaded", (e) => {
  socket = new WebSocket("ws://localhost:6969");

  socket.addEventListener("open", function (event) {
    console.log("WebSocket connection opened");
  });

  socket.addEventListener("message", function (event) {
    console.log("Received message from server:");
    const msg = JSON.parse(event.data);
    console.log(msg);
    if (!msg.error) {
      window.location.href = "../party/party.html";
      return;
    }
    msgPopupInvalidLogin();
  });

  socket.addEventListener("error", function (event) {
    console.error("WebSocket error:", event);
  });

  socket.addEventListener("close", function (event) {
    console.log("WebSocket connection closed");
  });
});

function msgPopupInvalidLogin() {
    alert("Voce não tem registros por aqui! Crie um novo personagem!");
}
