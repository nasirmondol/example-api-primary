// function getAlbum() {
//     fetch('https://jsonplaceholder.typicode.com/albums')
//         .then(res => res.json())
//         .then(data => displayAlbum(data))
// }

// getAlbum();

// function displayAlbum(albums) {

//     const divContainer = document.getElementById('album-container');
//     for (const album of albums) {
//         const title = album.title;
//         const albumDiv = document.createElement('div');
//         albumDiv.classList.add('album')
//         albumDiv.style.backgroundColor = 'lightBlue';
//         albumDiv.style.padding = '20px';
//         albumDiv.style.margin = '20px';
//         albumDiv.style.borderRadius = '15px';
//         albumDiv.innerHTML = `
//         <h3>${album.id}</h3>
//         <h2>${title}</h2>
//         `
//         divContainer.appendChild(albumDiv);
//     }
// }

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
const stP = JSON.parse(stuInfo);
console.log(stP.name);