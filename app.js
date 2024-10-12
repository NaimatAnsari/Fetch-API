
async function fetchData() {
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    console.log(data)
    return data
}

fetchData().then((userData)=>{
    console.log(userData);
    
    let card = document.getElementById('Card')
    userData.users.map((user)=>{
        const profile =`
          <div class="profile-card">
          <img src=${user.image}  alt=${user.firstName} >
          <h3> <b>${user.firstName} </b> </h3>
          <p>Email: <b>${user.email}</b> </p>
          <p>Address: <b>${user.address.city}</b>  </p>
          <p>Age: <b>${user.age}</b>  </p>
          <p>Gender: <b>${user.gender}</b>  </p>
          <p>Phone: <b>${user.phone}</b>  </p>
          <p>Designation: <b>${user.company.title}</b>  </p>
           <a href="user.html?id=${user.id}" class="view-profile-btn">View Profile</a>
        </div>
        `

        card.innerHTML += profile
    })
}).catch((err)=>{
    console.log(err)
})
