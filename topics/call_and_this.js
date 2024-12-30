function setUsername(username) {
    this.username = username;
}

function setUser (username, email, password){
    // setUsername(username)    // this won't set userName for this context.. instead does for above Function context
    setUsername.call(this, username) // thus here we have to pass our own context to assign variable in our context and explicitly .call the function
    this.email = email
    this.password = password
}

const user1 = new setUser('kundan', 'kundan@email.com', 123)
console.log(user1)