// API url: https://www.boredapi.com/api/activity/

const url = "https://www.boredapi.com/api/activity/";

const btn = document.querySelector(".button");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  whatToDo();
});

const whatToDo = async () => {
`⏳ Just a sec...`

  try {
    const response = await fetch(url);
    const data = await response.json();
    result.textContent = data.activity;
  } catch (err) {
    result.textContent = `You are beyond help. 💩`;
  }
};

whatToDo();
