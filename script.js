const questions = [
    "Tell me about Enrollment!",
    "Tell me about Judicium!",
    "What are 0 credit English Classes?",
    "Tell me about Enrollment!",
    "Tell me about Judicium!",
    "What are 0 credit English Classes?"
]

const answers = [
    "In addition to the concentration enrollment, at the end of their first academic year students will be asked to conduct another package enrollment followed by elective courses enrollment. Package and elective (or adding retake for transfer students) enrollment schedules may be different depending on the period set out in the academic calendar.",
    "As students are finishing up their studies at President University, graduating students will have to be cleared for judicium before being declared eligible for graduation. This process is requested by students on PUIS.",
    "English 0 credits classes will be very advantageous as this can be used as the fulfillment of the English Proficiency requirement for Judicium at the end of their studies with a minimum grade of B on each level."
]

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");
const chatToggler = document.querySelector(".chatbot-toggler");
const chatBotCloseBtn = document.querySelector(".close-btn");
const questionList = document.querySelector(".questions-list")

let userMessage;
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    //Create chat list element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const createLi = (message, index) => {
    const li = document.createElement("li");
    li.innerHTML = message;
    return li;
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;

    //Append user message to chatbox
    chatBox.appendChild(createChatLi(userMessage, "outgoing"));

    //Display thinking...
    setTimeout(() => {
        chatBox.appendChild(createChatLi("Thinking...", "incoming"));
    }, 600)

    chatInput.value = "";
}

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
})

sendChatBtn.addEventListener("click", handleChat);
chatToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot")
});
chatBotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
document.onreadystatechange = () => {
    if (document.readyState === "complete"){
        questions.forEach((element, index) => {
            questionList.appendChild(createLi(element, index));
        });
    }
}