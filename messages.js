const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("messageInput");

function sendMessage() {
  const text = messageInput.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  messageInput.value = "";

  // Fake bot reply (replace with backend/API later)
  setTimeout(() => {
    addMessage("Thanks for your message!", "bot");
  }, 600);
}

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);

  const span = document.createElement("span");
  span.textContent = text;

  messageDiv.appendChild(span);
  chatMessages.appendChild(messageDiv);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send with Enter key
messageInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
