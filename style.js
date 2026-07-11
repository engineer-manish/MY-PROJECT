const btn = document.getElementById("submit");
const container = document.getElementById("main");

let users = [];

async function fetchData() {
    const loading = document.createElement("p");
    loading.innerText = "...Loading";
    container.appendChild(loading);

    try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        const data = await response.json();
        users = data.results;
        console.log(users);
        displayUsers(users);

    } 
        catch {
        const error = document.createElement("p");
        error.innerText = "Page not found";
        container.appendChild(error);
    } 
        finally {
        loading.remove();
    }
}

function displayUsers(userArray) {
    container.innerHTML = "";
    for (let i = 0; i < userArray.length; i++) {
        const {name,email,location,picture} = userArray[i];
        const alld = `${name.title},${name.first},${name.last},${email}, ${location.country}`;

        const divi = document.createElement("p");
        const userImg = document.createElement("img");
        divi.innerText = alld;
        userImg.src = `${picture.large}`;
        container.appendChild(divi);
        container.appendChild(userImg);
        }
    }

fetchData();

btn.addEventListener("input", function() {
    const search = btn.value.toLowerCase().trim();
    container.innerHTML = "";
    if(!search){
        displayUsers(users);
        return;
    }
    
    const filteredUsers = [];
   for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const text = `${user.name.title} ${user.name.first} ${user.name.last} ${user.email} ${user.location.country}`.toLowerCase();
    if(text.includes(search)){
        filteredUsers.push(user);
    } 
    else{
        const noResults = document.createElement("p");
        noResults.innerText = "No results found";
        container.appendChild(noResults);
    }
}
 displayUsers(filteredUsers);}
);