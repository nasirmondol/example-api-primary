function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}

function displayUsers(params){
    console.log(params[0].name);
    const name = params[0].name;
    const loadContainer = document.getElementById('load-container');
    const h2 = document.createElement('h2');
    h2.innerText = name;
    loadContainer.appendChild(h2);
}