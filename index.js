//image
const image = document.getElementById("image");
image.src = characterOne.image;
const init = () => {
 fetch ("http://localhost:3000/characters")
.then(response => response.json())
.then (characterOne => {
 let divOne = document.getElementById("character-bar");
 let spanOne = document.createElement("span");
 spanOne.innerText = data.name;
 divOne.appendChild(spanOne);
spanOne.dataset.id = data.id;

     const characterBarDiv = document.getElementById("character-bar");
  const spanTwo = document.createElement("span");
  spanTwo.innerHTML = characterOne.name;
     characterBarDiv.appendChild(spanTwo);
      spanTwo.dataset.id = characterOne.id;
     // spanTwo.

    })

 }

document.addEventListener("DOMContentLoaded", init);
