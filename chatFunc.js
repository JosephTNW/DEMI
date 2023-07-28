const createChatLi = (message, className) => {
  //Create chat list element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent;
  if (className === "outgoing") {
    chatContent = `<p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
  } else {
    chatContent = `<span class="material-symbols-outlined">smart_toy</span><p>${formatChatRegexBundle(message)}</p>`
    chatLi.innerHTML = chatContent;
  }
  return chatLi;
};

const createWarning = (message) => {
  const warnH2 = document.createElement("h2");
  const content = `<span class="material-symbols-outlined">error</span><p>${message}</p>`
  warnH2.innerHTML = content;

  return warnH2;
}

const scrollHorizontally = (e) => {
  e = window.event || e;
  let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  document.getElementById("yourDiv").scrollLeft -= delta * 40; // Multiplied by 40
  e.preventDefault();
};

const setDisplay = (element, display) => {
  if(Array.isArray(element)){
    element.forEach((element) => {
      element.style.display = display;
    })
  } else {
    element.style.display = display;
  }
}

function shuffleArray(array) {
  // Create a new array to avoid modifying the original array
  const shuffledArray = array.slice();

  // Fisher-Yates (Knuth) shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

const selectThreeRandomElements = (array) => {
  // Shuffle the array
  const shuffledArray = shuffleArray(array);

  // Select the first three elements
  return shuffledArray.slice(0, 3);
}

const formatChatRegexBundle = (inputString) => {
  return makeLinkClickable(makeEmailClickable(convertLineBreaksToBrTags(inputString)));
}

const convertLineBreaksToBrTags = (inputString) => {
  // Replace all occurrences of newline characters with <br> tags
  return inputString.replace(/\n/g, "<br>");
}

const makeEmailClickable = (inputString) => {
  const emailRegex = /[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}/g;
  return inputString.replace(emailRegex, (email) => `<a href="mailto:${email}">${email}</a>`);
}

const makeLinkClickable = (inputString) => {
  const linkRegex = /https?:\/\/[^\s)]+/g;
  return inputString.replace(linkRegex, (url) => `<a href="${url}" target="_blank">${url}</a>`);
}

const searchForQs = (inputString, questions) => {

  const queryRegex = new RegExp(inputString, 'gi');

  const matches = questions.filter(question => question.match(queryRegex));
  return matches;
}

export { createChatLi, setDisplay, searchForQs, createWarning };
