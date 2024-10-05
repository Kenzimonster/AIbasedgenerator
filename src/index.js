function displayPoem(response){
  console.log("Poem complete")
  new Typewriter("#aiResponse", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}

function generatePoem(event){
 event.preventDefault();
 let instructionsInput = document.querySelector("#userInput");
 let poemType = document.querySelector("#poemType");
 let apiKey = "3at0foeb77eba84a5c21cf21f38b13e9";
 let prompt =`User Instrcution: generate a ${poemType.value} poem about ${instructionsInput.value} in the traditional format of ${poemType.value}`; 
 let context = `you are an expert in poetry and know many types of poetry and must wirte each type of poetry in their traditional styling, your mission is to generate a short poem keeping strictly to the traditional formating of ${poemType.value} poetry, seperate each line with a <br/>. make sure to follow the User Instrucion. please do not include a title and please sign the poem "the Goblins" at the end of the poem in a <em> element and please do NOT sign at the begining `;
 let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
 console.log("generating poem")
 console.log(`prompt: ${prompt}`)
 console.log(`context: ${context}`)
 axios.get(apiUrl).then(displayPoem);
}

function loading(){
  new Typewriter("#aiResponse", {
    strings: "The goblins are crafting your poem",
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}

let poemFormElement = document.querySelector("#poemGenerator")
poemFormElement,addEventListener("submit", generatePoem)