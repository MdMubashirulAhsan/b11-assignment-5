// go to another page

document.querySelector("#discovery").addEventListener("click", function () {
  window.location.href = "blogs.html";
});

//   background color changing

const colorList = [
  "bg-custom1",
  "bg-slate-500",
  "bg-purple-500",
  "bg-sky-500",
  "bg-zinc-500",
  "bg-slate-500",
];
let color = 0;

const bodyBg = document.querySelector("#bodyBgColor");
const colorChange = document.querySelector("#bgBtn");

bodyBg.classList.add(colorList[color]);

colorChange.addEventListener("click", function () {
  
  bodyBg.classList.remove(colorList[color]);

  
  color = (color + 1) % colorList.length;

  
  bodyBg.classList.add(colorList[color]);
});

// updated date
const date = new Date();

const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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

const dayName = weekDay[date.getDay()];

const month = months[date.getMonth()];

const day = date.getDate();

const year = date.getFullYear();

const finalDate = `<p>${dayName}, <br> 
                     ${month} ${day} ${year}</p>`;

document.getElementById("currDate").innerHTML = finalDate;

// complete button

for (let i = 1; i < 7; i++) {
  const str = i.toString();

  document
    .querySelector("#btn-c-" + str)

    .addEventListener("click", function () {
      document.querySelector("#btn-c-" + str).disabled = true;
      document.querySelector("#btn-c-" + str).classList.add("bg-slate-400");

      const a = document.querySelector("#card-title-" + str).textContent;

      taskComplete(a);
    });
}

// current time

const currDate = new Date();
let hours = currDate.getHours();
const minutes = currDate.getMinutes();
const seconds = currDate.getSeconds();
let amOrPm = "";
if (hours >= 12) {
  amOrPm = "PM";
  hours = hours % 12;
} else {
  amOrPm = "AM";
}

const c = `${hours}:${minutes}:${seconds} ${amOrPm}`;

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

  para.innerHTML = `<p class="bg-custom1 mb-2 border-r-slate-400 rounded-md p-2 text-sm">You have completed the task title <span class="font-bold">${b}</span> at <span class="font-bold">${c}</span></p>`;
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
