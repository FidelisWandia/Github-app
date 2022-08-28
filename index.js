const button = document.querySelector("#btn")
let inputEl = document.querySelector("#input-el")
let userDiv = document.querySelector("#user-info")
let userAvatar = document.querySelector("#avatar")
let userName = document.querySelector("#name")
let userBio = document.querySelector("#bio")
let userBlog = document.querySelector("#blog")
let url = document.querySelector("#url")
let users = []


/*button.addEventListener("click", function(){
    console.log("button clicked")
    fetch(`https://api.github.com/users/${inputEl.value}`)
    .then(result=>result.json())
    .then((data)=>{
        console.log(data)
        let userAvatar = data["avatar_url"]
        let userName = data.name
        let userBio = data.bio
        let userBlog = data.blog
        let userUrl = data["html_url"]

        avatar.style.backgroundImage = "url('userAvatar')"
        name.innerHTML = `Name: ${userName}`
        bio.innerHTML = `Bio: ${userBio}`
        blog.innerHTML = `Blog: ${userBlog}`
        url.innerHTML = `Github Page: ${userUrl}`

    })
        
})*/



let userInfo = {
    userData: function(username){
        return fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
            this.displayData(data)})
    },
    displayData: function(data){
        let {id} = data
        let {name} = data
        let {bio} = data
        let {blog} = data
        console.log(name, bio, blog, id)
        userAvatar.src = `https://avatars.githubusercontent.com/u/${id}?v=4`
        userName.innerHTML = name
        userBio.innerHTML = bio
        userBlog.innerHTML = blog
    }
}


button.addEventListener("click", function(){
    userInfo.userData(inputEl.value)
    inputEl.value = ""
    users.push(userInfo)
    users.forEach(function(user){
        userDiv+=user
    })
})

console.log(users)






















