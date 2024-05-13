console.log("Js working");

//Resize Object using Scroll Height
const explanationObjects = document.querySelectorAll(".explanationObject");
function resizeObjects() {
    explanationObjects.forEach((explanationObject) => {
        let objectDocument = explanationObject.contentDocument;
        let objectHeight = objectDocument.body.scrollHeight;
        let objectHeightPlus = objectHeight + 20;
        explanationObject.style.height = objectHeightPlus + "px";
    })
}

//Dropdown
const dropdownButtonText = document.querySelector(".dropdownButtonText");
const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    project.addEventListener("click", () => {
        dropdownButtonText.innerText = project.innerText;
    })
})

//If dropdown text is this website then show javascript-home
const placeholderHTML = document.getElementById("placeholder-html");
const homeJavascript = document.getElementById("home-javascript");

function testing() {
    setTimeout(() => {
        switch (dropdownButtonText.innerHTML) {
            case dropdownButtonText.innerHTML = "Select Project":
                explanationObjects.forEach((explanationObject) => {
                    explanationObject.style.display = "none";
                })
                placeholderHTML.style.display = block;
                console.log("Select Project is selected");
                break;
            case dropdownButtonText.innerHTML = "This Website":
                explanationObjects.forEach((explanationObject) => {
                    explanationObject.style.display = "none";
                })
                homeJavascript.style.display = "block";
                console.log("This Website is selected");
                break;
            case dropdownButtonText.innerHTML = "BlackJack":
                console.log("BlackJack is selected");
                break;
        }
    }, 1);
}