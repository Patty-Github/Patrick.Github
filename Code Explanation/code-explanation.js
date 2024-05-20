console.log("Code-Explanation JS Working");

//Language Selector 


//Resize Object using Scroll Height
const explanationObjects = document.querySelectorAll(".explanationObject");
function resizeObjects() {
    setTimeout(() => {
        explanationObjects.forEach((explanationObject) => {
        let objectDocument = explanationObject.contentDocument;
        let objectHeight = objectDocument.body.scrollHeight;
        let objectHeightPlus = objectHeight + 20;
        explanationObject.style.height = objectHeightPlus + "px";
        });
    }, 1);
}

//Dropdown
const dropdownButtonText = document.querySelector(".dropdownButtonText");
const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    project.addEventListener("click", () => {
        dropdownButtonText.innerText = project.innerText;
    })
})

//Show Selected
const placeholderHTML = document.getElementById("placeholder-html");

const homeJavascript = document.getElementById("home-javascript");

const blackjackJavascript = document.getElementById("blackjack-javascript");

const tdModelTest = document.getElementById("3d-model-test-javascript")

function showPlaceholderOnLaunch() {
    if(dropdownButtonText.innerHTML = "Select Project") {
        explanationObjects.forEach((explanationObject) => {
            explanationObject.style.display = "none";
            placeholderHTML.style.display = "block";
            console.log("Select Project is selected");
        })
    }
}

function showSelectedProject() {
    setTimeout(() => {
        switch (dropdownButtonText.innerHTML) {
            case "Select Project":
                explanationObjects.forEach((explanationObject) => {
                    explanationObject.style.display = "none";
                })
                placeholderHTML.style.display = "block";
                console.log("Select Project is selected");
                break;
            case "This Website":
                explanationObjects.forEach((explanationObject) => {
                    explanationObject.style.display = "none";
                })
                homeJavascript.style.display = "block";
                console.log("This Website is selected");
                break;
            case "BlackJack":
                explanationObjects.forEach((explanationObject) => {
                    explanationObject.style.display = "none";
                })
                blackjackJavascript.style.display = "block";
                console.log("BlackJack is selected");
                break;
            case "3D Model Test":
                explanationObjects.forEach((explanationObject) => {
                    explanationObject.style.display = "none";
                })
                tdModelTest.style.display = "block";
                console.log("3D Model Test is selected");
                break;
        }
    }, 1);
}
document.addEventListener("DOMContentLoaded", showPlaceholderOnLaunch())
document.addEventListener("DOMContentLoaded", resizeObjects());