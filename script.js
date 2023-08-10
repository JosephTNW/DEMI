import { bucketQna, recMap, bucketQ } from "./qna.js";
import {
  createChatLi,
  searchForQs,
  setDisplay,
  createWarning,
} from "./chatFunc.js";

let qna = [];

let initRec = [0, 1, 2, 3, 4, 5, 62, 68, 71, 74, 77, 85, 90, 95];

let rec = initRec;

rec.forEach((element) => {
  qna.push(bucketQna[element])
})

const chatInput = document.querySelector(".chat-input textarea");
const chatBox = document.querySelector(".chatbox");
const chatToggler = document.querySelector(".chatbot-toggler");
const chatBotCloseBtn = document.querySelector(".close-btn");
const questionList = document.querySelector(".questions-list");
const darkenCover = document.querySelector(".darken");
const middleBox = document.querySelector(".middle-box");
const completeQList = document.querySelector(".complete-q-list");
const closeInfo = document.querySelector(".close-info");
const arrowRightBtn = document.querySelector(".arrow-right");
const arrowLeftBtn = document.querySelector(".arrow-left");
const moreBtn = document.querySelector(".more");
const queryList = document.querySelector(".query-list");
const chatbotBody = document.querySelector(".chatbot-body");
const switchMode = document.querySelector("header svg");
const presBot = document.querySelector(".presbot");
const demiAi = document.querySelector(".demi-ai");

const inputInitHeight = chatInput.scrollHeight;

const createLi = (parent, message, index) => {
  const li = document.createElement("li");
  li.innerHTML = message;

  li.onclick = () => {
    setDisplay(queryList, "none");
    chatInput.value = "";
    setDisplay([arrowRightBtn, arrowLeftBtn, moreBtn], "block");
    setDisplay(questionList, "flex");
    setDisplay([darkenCover, middleBox, closeInfo], "none");

    //Generate message from user
    chatBox.appendChild(createChatLi(message, "outgoing"));

    if (parent == questionList) {
      chatBox.appendChild(createChatLi(qna[index].a, "incoming"));
    } else {
      chatBox.appendChild(createChatLi(bucketQna[index].a, "incoming"));
    }

    //Auto Scroll to the bottom
    chatBox.scrollTo(0, chatBox.scrollHeight);

    //Check if the question is mapped
    rec = recMap.has(rec[index]) ? recMap.get(rec[index]) : initRec;
    console.log(rec);
    //Change question according to the mapped values
    qna = [];
    rec.forEach((element) => {
      qna.push(bucketQna[element]);
    });

    //Clear the whole list
    questionList.innerHTML = "";

    //Generate new list of questions
    qna.forEach((element, index) => {
      questionList.appendChild(createLi(questionList, element.q, index));
    });
  };
  return li;
};

const checkScroll = () => {
  const remainingScroll = questionList.scrollWidth - questionList.scrollLeft;

  if (remainingScroll <= 421) {
    setDisplay(arrowRightBtn, "none");
  } else {
    setDisplay(arrowRightBtn, "block");
  }

  if (questionList.scrollLeft <= 1) {
    setDisplay(arrowLeftBtn, "none");
  } else {
    setDisplay(arrowLeftBtn, "block");
  }
};

//Change textarea height according to the amount of text
chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

//Chat toggler logic
chatToggler.addEventListener("click", () => {
  chatbotBody.classList.toggle("show-chatbot");
  chatToggler.style.setProperty('--display', 'none')
});

//Chat close button logic
chatBotCloseBtn.addEventListener("click", () =>
  chatbotBody.classList.remove("show-chatbot")
);

//Arrow right logic
arrowRightBtn.addEventListener("click", () => {
  questionList.scrollLeft += 100;
});

//Arrow left logic
arrowLeftBtn.addEventListener("click", () => {
  questionList.scrollLeft -= 100;
});

//Display arrows when scrolled to each end
questionList.addEventListener("scroll", checkScroll);

darkenCover.addEventListener("click", () => {
  setDisplay([darkenCover, middleBox, closeInfo], "none");
});

closeInfo.addEventListener("click", () => {
  setDisplay([darkenCover, middleBox, closeInfo], "none");
});

moreBtn.addEventListener("click", () => {
  setDisplay([darkenCover, closeInfo], "block");
  middleBox.style.display = "flex";
  completeQList.innerHTML = "";
  bucketQna.forEach((element, index) => {
    completeQList.appendChild(createLi(completeQList, element.q, index));
  });
});

chatInput.addEventListener("input", () => {
  queryList.innerHTML = "";
  let matches = searchForQs(chatInput.value, bucketQ);
  if (chatInput.value == "") {
    setDisplay([arrowRightBtn, moreBtn], "block");
    setDisplay(questionList, "flex");
    setDisplay(queryList, "none");
  } else {
    setDisplay([arrowRightBtn, arrowLeftBtn, moreBtn], "none");
    setDisplay(questionList, "none");
    setDisplay(queryList, "block");
    queryList.innerHTML = "";
  }
  if (matches.length != 0) {
    matches.forEach((match) => {
      queryList.appendChild(createLi(queryList, match, bucketQ.indexOf(match)));
    });
  } else {
    queryList.appendChild(createWarning("No Similar Questions Found"));
  }
});

//Display initial questions
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    qna.forEach((element, index) => {
      questionList.appendChild(createLi(questionList, element.q, index));
    });
  }
  arrowLeftBtn.style.display = "none";
};

switchMode.addEventListener("click", () => {
  presBot.classList.toggle('display-none');
  demiAi.classList.toggle('display-none');
})