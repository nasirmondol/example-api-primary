function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data));
}

function displayPost(users) {
    // console.log(users);
    const div = document.getElementById('post-container');

    for (const user of users) {
        console.log(user);
        
        const childDiv = document.createElement('div');
        childDiv.classList.add('child');
        childDiv.style.backgroundColor = 'lightBlue';
        childDiv.style.padding = '20px';
        childDiv.style.margin = '20px';
        childDiv.style.borderRadius = '15px';
        childDiv.innerHTML = `
        <h5>${user.id}</h5>
        <h2>${user.title}</h2>
        <p>${user.body}</p>
        `;
        div.appendChild(childDiv)
    }
}
loadPost();