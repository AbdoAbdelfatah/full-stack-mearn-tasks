// Create login page and when user press login button create object login that hold
// the data and if username = admin and password = 123 show him message
// “welcome” , else show him message “not registered”
// don’t use alert or prompt , use dom to get the data from user and display it
var div1 = document.getElementById("div1");
var usernameInput = document.getElementById("inp1");
var passwordInput = document.getElementById("inp2");
var loginButton = document.getElementById("btn1");

loginButton.addEventListener("click", function () {
  var login = {
    username:usernameInput.value,
    password:passwordInput.value
  }
  if(login.username=="admin"&&login.password=="123"){
        display("Welcome...")
  }
  else{
        display("Not Registered")
  }
});


function display(s){
    div1.innerHTML="";
    var p=document.createElement("p");
    p.innerText=s; 
    p.style.fontFamily="Arial";
    p.style.fontSize="18px"
    div1.appendChild(p);
}



// Create Todo list app similar to this object
// [{name:’task1’,status,’done’},{…},…..]
// when user write task name and press add new task will be added to tasks list and
// array of tasks
// When user click the done mark in green the task status will be updated to done
// and change color
// When user click the delete button , the task should be deleted from list and array
// of tasks

var div2 = document.getElementById("div2");
var task = document.getElementById("inp3");
var addButton = document.getElementById("btn2");

var listTasks=[];
addButton.addEventListener("click", function () {
    listTasks.push({ name: task.value, status: "pending" });
    task.value = "";
    display();
});

function display(){
    div2.innerHTML="";
    listTasks.forEach(function(el,index){
        var taskDiv = document.createElement("div");
        
        taskDiv.style.display = "flex";
        taskDiv.style.alignItems = "center";
        taskDiv.style.justifyContent = "space-between";
        taskDiv.style.margin = "10px 0";
        taskDiv.style.padding = "10px";
        taskDiv.style.border = "1px solid #ccc";
        taskDiv.style.borderRadius = "6px";
        taskDiv.style.backgroundColor = el.status === "done" ? "#c8f7c5" : "#fff";


        var nameSpan = document.createElement("span");
        nameSpan.innerText = el.name; 

        var done = document.createElement("button");
        done.innerText = "✓";
        done.style.backgroundColor = "green";
        done.style.color = "white";
        done.style.border = "none";
        done.style.padding = "5px 10px";
        done.style.borderRadius = "5px";
        done.style.marginRight = "10px";

        done.onclick = function () {
        listTasks[index].status = "done";
        display();
        };

         var del = document.createElement("button");
        del.innerText = "✗";
        del.style.backgroundColor = "red";
        del.style.color = "white";
        del.style.border = "none";
        del.style.padding = "5px 10px";
        del.style.borderRadius = "5px";

        del.onclick = function () {
        listTasks.splice(index, 1);
        display();
        };

        
        var btnDiv = document.createElement("div");
        btnDiv.appendChild(done);
        btnDiv.appendChild(del);

        taskDiv.appendChild(nameSpan);
        taskDiv.appendChild(btnDiv);

        div2.appendChild(taskDiv);
    })
}


