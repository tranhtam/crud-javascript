
function getUsers (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {console.log(json)

        let tBodyContent = json.map((item, index) => 
            `<tr class=${index % 2 === 0 ? "table-active":"table-striped"}>
            <th scope="row" data-id=${item.id}>${item.id}</th>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>
            <button class="iconshow" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=onRowClick(${item.id})><ion-icon name="information-outline"></ion-icon></button>
            </td>
            </tr>`) 

        document.querySelector('#tableUser').innerHTML = tBodyContent.join('');

        
    }
    )
}
getUsers();

function onRowClick(item) {
    console.log("row click ", item);
    fetch(`https://jsonplaceholder.typicode.com/users/${item}`)
    .then(response => response.json())
    .then(user => {
        console.log(user)

        // let userDetails 
        // TODO: 
        // - tạo 1 biến để gán data
        // - pass data vào html form 
        // - tìm đến vị trí model để pass data vào
        let userDetail = 
        `<input type="text" placeholder="Display name" value="${user.name}">
        <input type="text" placeholder="Full name" value=${user.username}>
        <input type="email" placeholder="Email address" value=${user.email}>
        <input type="tel" placeholder="Phone number" value=${user.phone}>
        <input type="text" placeholder="Website" value=${user.website}>
        `
        document.querySelector('#modal-user-detail').innerHTML = userDetail;
    
    })

}






    


