<!DOCTYPE html>
<html>
<head>
    <!-- Include necessary CSS -->
    <link rel="stylesheet" type="text/css" href="chatbot.css">
    <style>
        /* Add some basic styles for the chatbot */
        .chatbot { position: fixed; bottom: 20px; right: 20px; width: 300px; }
        .chatbot-toggler { cursor: pointer; background: #007bff; color: white; padding: 10px; text-align: center; }
        .chatbox { display: none; background: white; border: 1px solid #ccc; padding: 10px; max-height: 400px; overflow-y: auto; }
        .chat-input { display: flex; }
        .chat-input textarea { flex-grow: 1; padding: 5px; }
        .send-chat { background: #007bff; color: white; border: none; padding: 5px 10px; cursor: pointer; }
        .close-btn { cursor: pointer; color: #007bff; text-align: center; margin-top: 10px; }
        .chat li { list-style: none; padding: 5px; margin-bottom: 10px; }
        .chat .outgoing { text-align: right; }
        .chat .incoming { text-align: left; }
    </style>
</head>
<body>
    <!-- Chatbot UI -->
    <div class="chatbot">
        <div class="chatbot-toggler">Chatbot</div>
        <div class="chatbox">
            <ul class="chat"></ul>
        </div>
        <div class="chat-input">
            <textarea placeholder="Type your query..."></textarea>
            <button class="send-chat">Send</button>
        </div>
        <div class="close-btn">Close</div>
    </div>

    <script>
        const chatbox = document.querySelector(".chatbox");
        const chatList = chatbox.querySelector(".chat");
        const chatInput = document.querySelector(".chat-input textarea");
        const sendChatBtn = document.querySelector(".send-chat");
        const closeBtn = document.querySelector(".close-btn");
        const toggler = document.querySelector(".chatbot-toggler");

        const inputInitHeight = chatInput.scrollHeight;

        const createChatLi = (message, className) => {
            // Create a chat <li> element with passed message and className
            const chatLi = document.createElement("li");
            chatLi.classList.add("chat", className);
            chatLi.textContent = message;
            return chatLi; // return chat <li> element
        }

        const generateResponse = (userMessage) => {
            // Simulate response generation based on user's message
            return "This is a simulated response to your query: " + userMessage;
        }

        const handleChat = () => {
            const userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
            if (!userMessage) return;

            // Clear the input textarea and set its height to default
            chatInput.value = "";
            chatInput.style.height = `${inputInitHeight}px`;

            // Append the user's message to the chatbox
            chatList.appendChild(createChatLi(userMessage, "outgoing"));
            chatbox.scrollTo(0, chatbox.scrollHeight);

            setTimeout(() => {
                // Simulate "Thinking..." message while waiting for the response
                const incomingChatLi = createChatLi("Thinking...", "incoming");
                chatList.appendChild(incomingChatLi);
                chatbox.scrollTo(0, chatbox.scrollHeight);

                // Simulate response generation (replace this with actual LLM integration)
                const response = generateResponse(userMessage);

                setTimeout(() => {
                    // Display the generated response
                    incomingChatLi.textContent = response;
                    chatbox.scrollTo(0, chatbox.scrollHeight);
                }, 1000); // Simulate response delay
            }, 600);
        }

        chatInput.addEventListener("input", () => {
            // Adjust the height of the input textarea based on its content
            chatInput.style.height = `${inputInitHeight}px`;
            chatInput.style.height = `${chatInput.scrollHeight}px`;
        });

        sendChatBtn.addEventListener("click", handleChat);
        closeBtn.addEventListener("click", () => chatbox.style.display = 'none');
        toggler.addEventListener("click", () => chatbox.style.display = 'block');
    </script>
</body>
</html>
