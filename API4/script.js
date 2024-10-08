var button = document.getElementById("fetch");

button.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/albums", true);
  console.log("clicked button");

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    if (this.status == 200) {
      const users = JSON.parse(this.responseText);
      console.log(this.responseText);
      displayUsers(users);
    } else console.log("not found");
  };

  xhr.send();
}

function displayUsers(users) {
  const userList = document.getElementById("user-container");
  userList.innerHTML = "";

  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-card");

    // Post data
    userDiv.innerHTML = `
        <p><strong>UserId:</strong> ${user.userId}</p>
        <p><strong>Id:</strong> ${user.id}</p>
        <p><strong>title:</strong> ${user.title}</p>
        
        <hr/>
            `;
    userList.appendChild(userDiv);
  });
}
