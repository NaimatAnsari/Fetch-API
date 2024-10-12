
async function fetchData() {
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    console.log(data)
    return data
}

let userData = null;

fetchData().then((userData)=>{
    console.log(userData);
    
    let card = document.getElementById('Card')
    userData.users.map((user)=>{
        const profile =`
          <div class="profile-card">
          <img src=${user.image}  alt=${user.firstName} >
          <h3> <b>${user.firstName} ${user.lastName}</b> </h3>
          <p>Email: <b>${user.email}</b> </p>
          <p>Address: <b>${user.address.city}</b>  </p>
          <p>Age: <b>${user.age}</b>  </p>
          <p>Gender: <b>${user.gender}</b>  </p>
          <p>Phone: <b>${user.phone}</b>  </p>
          <p>Designation: <b>${user.company.title}</b>  </p>
           <a href="user.html?id=${user.id}" onclick="singleUser(${user.id})" class="view-profile-btn">View Profile</a>
        </div>
        `

        card.innerHTML += profile
    })
    
   
}
).catch((err)=>{
    console.log(err)
})

function singleUser() {
    
    async function getSingleUser() {
        let single = await fetch(`https://dummyjson.com/users/${userId}`);
          let singleData = await single.json();
          return singleData;
    }

    getSingleUser().then((mySingle)=>{
        let urlParams = new URLSearchParams(window.location.search)
        let id = parseInt(urlParams.get('id'))  
    
        const details =mySingle.users.find(userId => userId.id === id)
        const detailCard = document.getElementById('DetailCard')
    
        const detail =`
         <img src= ${details.image} alt=${details.firstName} >
        <h2><b>${details.firstName} ${details.lastName}</b></h2>
        <p>Email: <b>${details.email}</b></p>
        <p>Designation : <b>${details.company.title}</b></p>
    
        <div class="profile-details">
          <p><strong>Address:</strong> ${details.address.city}</p>
          <p><strong>Phone:</strong> ${details.phone}</p>
          <p><strong>Age:</strong> ${details.age}</p>
          <p><strong>University:</strong> ${details.university}</p>
          <p><strong>User Agent:</strong> ${details.userAgent}</p>
        </div>
        <a href="#" class="view-profile-btn">Contact</a>
        `
    
        detailCard.innerHTML += detail

    }).catch((error)=>{
        console.log(error)
    })

}

