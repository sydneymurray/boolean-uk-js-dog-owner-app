
// FUNCTIONS //////////////////////////////////////////////////

// DISPLAY MAIN DOG MENU BUTTONS
function displayMainSelectionMenu(){
    let dogListMenu = document.querySelector(".dogs-list")
    let listItem = null

    // CREATE A MAIN MENU BUTTON FOR EACH DOG
    for (const dog of data) {
        let listItem = document.createElement('li')
        listItem.innerText = dog.name
        listItem.setAttribute("class","dogs-list__button")       
        dogListMenu.append(listItem)

        // CREATE AN EVENT HANDLER FOR EACH BUTTON
        listItem.addEventListener("click", function (){
            displayDogCard(dog)}) 
    }
}

// CREATE AN EVENT HANDLER FOR THE ADD NEW DOG BUTTON
function newDogMenuButton(){
    // find the Add Menu
    let addADogButton = document.querySelector(".dogs-list__button--add")
    addADogButton.addEventListener("click", createANewDog) 
}

// DISPLAY DOG CARD (DOG MENU BUTTON CLICKED)
function displayDogCard(dog){

    // CLEAR CURRENT DOG SECTION
    let dogCard = document.querySelector(".main__dog-section")
    dogCard.innerHTML = ""
    
    // CREATE H2 TITLE
    let dogTitle = document.createElement('h2')
    dogTitle.innerText = dog.name
    dogCard.append(dogTitle)

    // DISPLAY DOGS PICTURE
    let dogPic = document.createElement('img')
    dogPic.setAttribute("src",dog.image)
    dogPic.setAttribute("width","400px")
    dogPic.setAttribute("height","300px")  
    dogCard.append(dogPic) 

    // CREATE A CONTAINER FOR DOG INFORMATION
    let infoContainer = document.createElement("div")
    infoContainer.setAttribute("class",".main__dog-section__desc")
    dogCard.append(infoContainer)
    
    // CREATE H3 BIO HEADING
    let bioHeading = document.createElement("h3")
    bioHeading.innerText="Biography"
    infoContainer.append(bioHeading)
        
    // DISPLAY DOG INFORMATION PARAGRAPH
    let bioText = document.createElement("p")
    bioText.innerText = dog.bio
    infoContainer.append(bioText)

    // CREATE A CONTAINER FOR GOOD DOG BAD DOG
    let goodBadContainer = document.createElement("div")
    goodBadContainer.setAttribute("class",".main__dog-section__btn")
    dogCard.append(goodBadContainer)

    // CREATE PARAGRAPH & EMPHASIZED TEXT CONTAINER FOR "IS NAUGHTY"
    let naughtyP = document.createElement("p")
    goodBadContainer.append(naughtyP)

    // CREATE GOOD DOG BAD DOG TEXT
    let naughtyEm = document.createElement("em")
    naughtyEm.innerText="Is naughty?"
    naughtyP.append(naughtyEm)
    naughtyP.innerText += dog.isGoodDog ? " No!" : " Yes!"

    // CREATE A GOOD DOG BAD DOG BUTTON
    let goodBadButton = document.createElement("button")
    goodBadButton.innerText = dog.isGoodDog ? "Bad Dog" : "Good Dog"
    goodBadContainer.append(goodBadButton)

    // CREATE AN EVENT HANDLER FOR GOOD DOG BAD DOG BUTTON
    goodBadButton.addEventListener("click", function (){
      goodBadButtonToggle(dog)}) 
}

// EVENT HANDLER FOR GOOD DOG BAD DOG BUTTON
function goodBadButtonToggle(dog){
  dog.isGoodDog = !dog.isGoodDog
  displayDogCard(dog)
}  

// CREATE A NEW DOG CARD
function createANewDog(){
  
    // CLEAR CURRENT DOG SECTION
    let dogCard = document.querySelector(".main__dog-section")
    dogCard.innerHTML = ""

    // CREATE H2 TITLE
    let newDogTitle = document.createElement('h2')
    newDogTitle.innerText = "Add a new Dog"
    dogCard.append(newDogTitle)
    
    // CREATE THE FORM
    let newDogForm = document.createElement('form')
    dogCard.append(newDogForm)

    // CREATE DOG NAME LABEL
    let dogNameLabel = document.createElement("label")
    dogNameLabel.setAttribute("for","name")
    dogNameLabel.innerText="Dog's name"
    newDogForm.append(dogNameLabel)

    // CREATE DOG NAME INPUT
    let dogNameInput = document.createElement("input")
    dogNameInput.setAttribute("id","name")
    dogNameInput.setAttribute("type","text")
    dogNameInput.setAttribute("name","name")
    newDogForm.append(dogNameInput)

    // CREATE DOG IMAGE LABEL
    let dogNameLabel = document.createElement("label")
    dogNameLabel.setAttribute("for","name")
    dogNameLabel.innerText="Dog's name"
    newDogForm.append(dogNameLabel)
    
    // CREATE DOG IMAGE LINK INPUT

    // CREATE DOG BIOGRAPHY LABEL & TEXT AREA INPUT

    // CREATE SUBMIT BUTTON


}

// MAIN PROGRAM //////////////////////////////////////////////
displayMainSelectionMenu()
newDogMenuButton()


// STUFF I MAY USE //////////////////////////////////////////
/*

// DETERMINE WHICH MENU BUTTON WAS CLICKED
function menuButtonClicked(eventId){
    if (eventId.srcElement.innerText==='+')
        createNewDog()
    else
        displayDogCard(eventId)
}

// FIND THE SELECTED DOG
function findTheDog(eventId){
    for (let i = 0; i < data.length; i++)
    if (eventId.srcElement.innerText===data[i].name)
        return data[i]
}

// DIPLAY THE SELeCTED DOG
function displayTheDog(dog){

}





*/