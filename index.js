const container = document.querySelector("#container");
const button = document.querySelector("#btn");
let inputEl = document.querySelector("#input-el");
let userDiv = document.querySelector(".user-container");
const API_URL = "https://api.github.com/users/";

function getUserInfo() {
	try {
		const username = inputEl.value;
		fetch(`${API_URL}${username}`)
			.then((response) => response.json())
			.then(renderUserInfo);
	} catch (error) {
		console.error(error);
	}
}

function renderUserInfo(data) {
	const { name, bio, blog, avatar_url } = data;
	const userDiv = document.createElement("div");
	const imageElement = document.createElement("img");
	const infoDiv = document.createElement("div");
	const nameElement = document.createElement("h1");
	const bioElement = document.createElement("p");
	const blogElement = document.createElement("p");

	userDiv.classList.add("user-container");
	imageElement.classList.add("avatar");
	infoDiv.classList.add("user-info");

	imageElement.src = avatar_url;
	imageElement.alt = name;
	nameElement.innerText = `Name: ${name}`;
	bioElement.innerText = `Bio: ${bio}`;
	blogElement.innerText = `Blog: ${blog}`;

	infoDiv.appendChild(nameElement);
	infoDiv.appendChild(bioElement);
	infoDiv.appendChild(blogElement);

	userDiv.appendChild(imageElement);
	userDiv.appendChild(infoDiv);

	container.appendChild(userDiv);

	inputEl.value = "";
}

button.addEventListener("click", getUserInfo);
