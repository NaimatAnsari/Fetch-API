
async function fetchData() {
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    console.log(data)
}

fetchData().then((userData)=>{
    let card = document.getElementById('Card')
    userData.users.map((user)=>{
        const profile =`
          <div class="profile-card">
          <img src= alt=>
          <h3>Naimat Ali</h3>
          <p>Email: naimat@example.com</p>
          <p>Address: Karachi, Pakistan</p>
          <p>Age: 25</p>
          <p>Phone: +92 300 1234567</p>
          <p>Company: Aptech</p>
        </div>
        `
    })
})
