function generatePoem(event){
  event.preventDefault();
  new Typewriter("#aiResponse", {
    strings: "The goblins are crafting your poem",
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}





let poemFormElement = document.querySelector("#poemGenerator")
poemFormElement,addEventListener("submit", generatePoem)