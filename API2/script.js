var button = document.getElementById("fetch");

button.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  const xhr = new XMLHttpRequest();

  // open or initilize the xmlHttpRequest object
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  console.log("clicked button");

  // what to do on progress
  xhr.onprogress = function () {
    console.log("on progress");
  };

  // onload what to do when response is ready
  xhr.onload = function () {
    if (this.status == 200) {
      const users = JSON.parse(this.responseText);
      console.log(this.responseText);
      displayUsers(users);
    } else console.log("not found");
  };

  // send the request
  xhr.send();
}

function displayUsers(users) {
  const userList = document.getElementById("user-container");
  userList.innerHTML = ""; // Clear any existing content

  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-card");

    // Populate user data
    userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <hr/>
          `;
    userList.appendChild(userDiv); // Append each user card to the list
  });
}
