// let todo = [];

// let req = prompt("please enter your request");

// while(true){
//     if(req=="quit"){
//         console.log("quitting app")
//         break;
//     }
//     if (req=="list"){
//         console.log("-----------");
//         for(let i=0; i<todo.length; i++);{
//             console.log(task);
        
//     }
//     console.log("-----------");
// } else if (req =="add"){
//     let task = prompt("please enter your task you want to add");
//     todo.push(task);
//     console.log("task added");
// } else if (req=="delete"){
//     let indx = prompt("please enter the task index");
//     todo.splice(indx ,  1);

// }
//   req= prompt("pls enter your request")



// }





let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";

});

let delBtns = document.querySelectorAll(".delete");
for (delBtn of delBtns){
    delBtn.addEventListener("click", function (){
        let par = this.parentElement;
        console.log(parent);
        par.remove();

    });
}