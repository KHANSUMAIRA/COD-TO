// const inputBox = document.getElementById("inputBox");
// const listContainer = document.getElementById("listContainer");

// function addTask() {
//   // console.log("yes");
//   let inputBox = document.getElementById("inputBox");
//   let listContainer = document.getElementById("listContainer");

//   if (inputBox.value === "") {
//     alert("You must write something.");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);

//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   }

//   inputBox.value = "";
//   saveData();
// }

// listContainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//       saveData();
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// );

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask() {
//   const data = JSON.parse(localStorage.getItem("data"));
// }
// showTask();
let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
 
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        //     newEle.querySelector("i").addEventListener("click" , edit);
        // function edit(){
        //     newEle.edit()
        }
    }
}
function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }