// - Change the background color of box1

let box1 = document.getElementById("box1")
box1.style.backgroundColor = "orange"

// - Set the font size in box1s to 44px
let box1s = document.getElementById("box1s")
box1s.style.fontSize = "44px"

// - Shrink box2 by half
let box2 = document.getElementById("box2")
box2.style.transform = "scale(0.5)";

// - Double the size of box2s
let box2s = document.getElementById("box2s")
box2s.style.transform = "scale(2)";

// - Create `div` with the class of `circle` and put it in the middle of box3
let div = document.createElement("div");
let main = document.getElementById("box3")
div.setAttribute("class", "circle");
main.appendChild(div);

// - Remove the circle from box3s

//There`s not circle in box3s`

/* - Write an arrow function for #box5 called `clearFinished` that will move 
all the completed tasks the chores in the list that have the class "done" to the #box5s.*/

const clearFinished = () => {
  document.querySelectorAll("#box5 .done").forEach( chore => {
    document.querySelector("#box5 ul").removeChild( chore )
    document.querySelector("#box5s ul").appendChild( chore )
  })
}

// - Call your function
clearFinished()

/*- Write a function called addChore that adds a new item to the list of 
chores, giving it the class "undone."*/

    const addChore = () => {

	let li = document.createElement("li")
  li.className = "undone"
  li.innerText = "Sweep the house"

  //   -  using the .appendChild().
  
  document.querySelector("#box5 ul").appendChild( li )

  //   -  using .innerHTML.
  document.querySelector("#box5 ul").innerHTML += "<li class='undone'>Take out the trash</li>"
}

// - Call your function
 addChore()
  
// - Reverse the text in #box6
let textBox6 = document.getElementById("box6").innerText;
document.getElementById("box6").innerText = textBox6.split("").reverse().join("")
 

// - Put <em></em> tags around the word "keep" in #box6s
let keep = document.getElementById("box6s").innerHTML.replace("keep", "<em>keep</em>")
document.getElementById("box6s").innerHTML = keep