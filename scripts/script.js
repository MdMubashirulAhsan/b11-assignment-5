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



document.querySelector("#btn-c-1").addEventListener("click", function(event){
    const tId = event.target.id;
    taskComplete();

    
    
    
    
    
    
    
      // Update the displayed count
      




})

// task complete function
let nCheck = 23;
let nTask =6;

function taskComplete(){
    alert("Board updated successfully");
    document.getElementById(tId).disabled = true;
    document.getElementById(tId).classList.add("bg-slate-400")
    nCheck++;
    nTask--;
    const check = document.querySelector('#numCheck');
const task = document.querySelector('#numTask');
    check.textContent = nCheck;
      task.textContent = nTask;
      const para = document.createElement('p');
    const title1 = document.getElementById('cTitle-' + tId).textContent;
    para.textContent = `You have completed the task title${tId} at `;

      if(nTask===0){
        alert("Congrats!!! You have completed all the current task");
      }
}



// clear history

document.querySelector('#clearBtn').addEventListener("click", function(){
    const toBeCleared = document.querySelector('#history');
    toBeCleared.removeChild();
    
    
})