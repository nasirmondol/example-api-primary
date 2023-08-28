function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            for (user of data) {
                console.log(user.name);
                const name = user.name;
                const ul = document.getElementById('load-container')
                const li = document.createElement('li');
                li.innerText = name;
                ul.appendChild(li);
            }
        });
}