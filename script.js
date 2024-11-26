const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

function addMessage(content, isUser = false) {
  const message = document.createElement("div");
  message.classList.add("message");
  message.classList.add(isUser ? "user" : "bot");
  message.textContent = content;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

sendButton.addEventListener("click", () => {
  const input = userInput.value.trim();
  if (input) {
    addMessage(input, true);
    userInput.value = "";
    getBotResponse(input); // Call the bot logic
  }
});

function getBotResponse(userMessage) {
  // Simple rule-based response for demonstration
  let response = "I'm not sure how to respond to that.";
  if (userMessage.includes("hello")) {
    response = "Hello! How can I assist you today?";
  } else if (userMessage.includes("help")) {
    response = "Sure, I'm here to help! What do you need assistance with?";
  }
  setTimeout(() => addMessage(response), 500); // Simulate response delay
}
