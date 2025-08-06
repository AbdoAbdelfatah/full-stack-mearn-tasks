// b) On click add user save all input to local storage and get them to show in the
// table
var addBtn = document.getElementById("add");
var nameInput = document.getElementById("Name");
var emailInput = document.getElementById("Email");
var cardSelect = document.getElementById("card");
var tableBody = document.querySelector("#tb1 tbody");
var searchInput = document.getElementById("search");   
var users = JSON.parse(localStorage.getItem("users")) || [];

function addTable(userList){ 
    tableBody.innerHTML = "";
    userList.forEach((user, index) => {
       
        var tr=document.createElement("tr");
        tr.innerHTML=`
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.card}</td>
                    <td><button onclick="editUser(${index})">Edit</button></td>
                    <td><button onclick="deleteUser(${index})">Delete</button></td>
                `;
                 tableBody.appendChild(tr);       
    });
    var footer = document.querySelector("#tb1 tfoot td");
    footer.innerHTML = `<strong>Number of Users: ${userList.length}</strong>`;
}

addBtn.addEventListener("click",function(){
    const selectedTitle = document.querySelector('input[name="title"]:checked');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const card = cardSelect.value;
    const user = {
            title: selectedTitle.value,
            name: name,
            email: email,
            card: card
        };

    
    localStorage.clear(); 
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    addTable(users);

  
});

addTable(users);
function editUser(index){
      const user = users[index];
        nameInput.value = user.name;
        emailInput.value = user.email;
        cardSelect.value = user.card;

        const titleInput = document.querySelector(`input[name="title"][value="${user.title}"]`);
        if (titleInput) titleInput.checked = true;

        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        addTable(users);
}

function deleteUser(index){
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        addTable(users);
}
searchInput.addEventListener("input", function () {
        var key=searchInput.value.toLowerCase();
        var dis=users.filter(user =>user.name.toLowerCase().includes(key));
        addTable(dis)
});
 