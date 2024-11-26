async function getBotResponse(userMessage) {
  addMessage("Thinking...", false);
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer YOUR_OPENAI_API_KEY`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    }),
  });
  const data = await response.json();
  const botMessage = data.choices[0]?.message?.content || "Sorry, I couldn't understand that.";
  addMessage(botMessage, false);
}
