document.querySelector("#discovery").addEventListener("click", function () {
  window.location.href = "blogs.html";
});

//   bg changing

const colorList = [
  "bg-red-500",
  "bg-slate-500",
  "bg-purple-500",
  "bg-sky-500",
  "bg-zinc-500",
  "bg-slate-500",
];
let color = 0;
let previousColor = "";
const colorChange = document.querySelector("#bgBtn");
colorChange.addEventListener("click", function () {
  const bodyBg = document.querySelector("#bodyBgColor");
  if (previousColor) {
    bodyBg.classList.remove(colorList[color]);
  }
  previousColor = colorList[color];
  bodyBg.classList.add(previousColor);
  color = (color + 1) % colorList.length;
});

// updated date
const date = new Date();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const month = months[date.getMonth()];

const day = date.getDate();

const year = date.getFullYear();

const updatedDate = `${month} ${day} ${year}`;

document.getElementById("currDate").textContent = updatedDate;

// complete button


for(let i=1; i<7; i++){
  const str = i.toString();
  
  document.querySelector('#btn-c-' + str)
  
.addEventListener("click", function () {
  
  document.querySelector("#btn-c-" + str).disabled = true;
  document.querySelector("#btn-c-" + str).classList.add("bg-slate-400");
  // let childElement = document.getElementById('childElement');

  const a = document.querySelector("#card-title-" + str).textContent;
  console.log(a)
  // let parentElement = childElement.parentElement;


// if (parentElement && parentElement.tagName.toLowerCase() === 'h1') {
//   const a = 
// }
  taskComplete(a);
});
}

// task complete function
let nCheck = 23;
let nTask = 6;

function taskComplete(b) {
  alert("Board updated successfully");

  nCheck++;
  nTask--;
  const check = document.querySelector("#numCheck");
  const task = document.querySelector("#numTask");
  check.textContent = nCheck;
  task.textContent = nTask;
  const para = document.createElement("p");

  para.innerHTML = `<p class="bg-custom1 mb-2 border-r-slate-400 rounded-md p-2">You have completed the task title <span class="font-bold">${b}</span> at </p>`;
  const addHistory = document.getElementById("history");
  addHistory.appendChild(para);

  if (nTask === 0) {
    alert("Congrats!!! You have completed all the current task");
  }
}

// clear history

document.querySelector("#clearBtn").addEventListener("click", function () {
  const toBeCleared = document.querySelector("#history");
  toBeCleared.innerHTML = "";
});
