console.log("explanation site js working");

        function printScreenWidth() {
            console.log(window.innerWidth);
        }
        printScreenWidth();
        window.addEventListener("resize", printScreenWidth)

        const htmlButton = document.getElementById("showHtmlButton");
        const cssButton = document.getElementById("showCssButton");
        const javascriptButton = document.getElementById("showJavascriptButton");
        const csButton = document.getElementById("showCsButton");
        const pythonButton = document.getElementById("showPythonButton");

        const htmlCodeDiv = document.getElementById("htmlExplanationCode");
        const cssCodeDiv = document.getElementById("cssExplanationCode");
        const javascriptCodeDiv = document.getElementById("javascriptExplanationCode");
        const csCodeDiv = document.getElementById("csExplanationCode");
        const pythonCodeDiv = document.getElementById("pythonExplanationCode");

        /*function checkForLanguage() {
            if (htmlCodeDiv.style.display = "block") {
                htmlButton.classList.add("active");
            } else if (cssCodeDiv.style.display = "block") {
                cssButton.classList.add("active");
            } else if (javascriptCodeDiv.style.display = "block") {
                javascriptButton.classList.add("active");
            } else if (csCodeDiv.style.display = "block") {
                csButton.classList.add("active");
            } else if (pythonCodeDiv.style.display = "block") {
                pythonButton.classList.add("active");
            }
        }*/

        function checkForLanguage() {
            if (htmlButton.classList.contains("active")) {
                htmlCodeDiv.style.display = "block";
            } else if (cssButton.classList.contains("active")) {
                cssCodeDiv.style.display = "block";
            } else if (javascriptButton.classList.contains("active")) {
                javascriptCodeDiv.style.display = "block";
            } else if (csButton.classList.contains("active")) {
                csCodeDiv.style.display = "block";
            } else if (pythonButton.classList.contains("active")) {
                pythonCodeDiv.style.display = "block";
        }
    }
        document.addEventListener("DOMContentLoaded", checkForLanguage);

        //if window width is <770px, only show the active button and have a menu open button showing the other buttons top to bottom.
        const languageButtons = document.querySelectorAll(".languageSelectorButton")
        function buttonFormater() {
            if(window.innerWidth < 620) {
                languageButtons.forEach((buttonV2) => {
                    if(buttonV2.classList.contains("active")) {
                        buttonV2.classList.add("showButton");
                    } else {
                        buttonV2.style.display = "none";
                    }
                })
            } else {
                languageButtons.forEach((buttonV2) => {
                    buttonV2.classList.remove("showButton");
                    buttonV2.style.display = "block";
                })
            }
        }
        document.addEventListener("DOMContentLoaded", buttonFormater);
        window.addEventListener("resize", buttonFormater);

        const optionsButton = document.querySelector(".showOptionsButton");
        function showShowOptionsButton() {
            if(window.innerWidth < 620) {
                optionsButton.style.display = "block";
            } else {
                optionsButton.style.display = "none";
            }
        }
        document.addEventListener("DOMContentLoaded", showShowOptionsButton);
        window.addEventListener("resize", showShowOptionsButton);


        
        //if window width is <1070px then add active class 
        function addActiveToBothArea() {
            const bothArea = document.querySelectorAll(".bothAreaLR, .bothAreaRL, .codeAreaLeftContainer, .codeAreaRightContainer, .explanationAreaRightContainer, .explanationAreaLeftContainer");
            if(window.innerWidth < 1070) {
                bothArea.forEach((bothAreaa) => {
                    bothAreaa.classList.add("active");
                })
                console.log("Screen Width Is Less Than 1070px");
            } else {
                bothArea.forEach((bothAreaa) => {
                    bothAreaa.classList.remove("active"); 
                })
            }
        }
        document.addEventListener('DOMContentLoaded', addActiveToBothArea);
        window.addEventListener("resize", addActiveToBothArea);
        window.addEventListener("click", addActiveToBothArea); //Don't know if this adds much lag, should make it only for the language buttons.
        


        const sideLanguageSelectorArea = document.querySelectorAll(".sideLanguageSelectorDiv")
        const sideLanguageSelectorButtons = document.querySelectorAll(".sideLanguageSelectorButton")
        function showOptionsFunction() {
            sideLanguageSelectorArea.forEach((sideLanguageSelectorAreaDiv) => {
                sideLanguageSelectorAreaDiv.style.display = "flex";
            })
        }
        
        function isShowOptionsClicked(event) {
            let target = event.target;
            if(target === sideLanguageSelectorButtons) {
                return;
            }
            sideLanguageSelectorArea.forEach((sideLanguageSelectorAreaDiv) => {
                sideLanguageSelectorAreaDiv.style.display = "none";
            })
            console.log("Clicked Off Show Options Button")
        }
        document.addEventListener("click", isShowOptionsClicked);



        const buttons = ["Html", "Css", "Javascript", "Cs", "Python"];
        const codeDivs = buttons.map(button => document.getElementById(`show${button}Button`));
        const explanationCodeDivs = buttons.map(button => document.getElementById(`${button.toLowerCase()}ExplanationCode`)); 

        buttons.forEach((button, index) => {
            codeDivs[index].onclick = function() {
                explanationCodeDivs.forEach((div, i) => {
                    div.style.display = i === index ? "block" : "none";
                });
                codeDivs.forEach((btn, i) => {
                    btn.classList.toggle("active", i === index);
                });
            }
        });


        //Dropdown Menu
        const optionMenu = document.querySelector(".select-menu"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        sBtn_text = optionMenu.querySelector(".sBtn-text");

        selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

        options.forEach(option => {
            option.addEventListener("click", () => {
                let selectedOption = option.querySelector(".option-text").innerText;
                sBtn_text.innerText = selectedOption;
                
                optionMenu.classList.remove("active");
            })
        })

        function isSelectorClicked(event) {
            let target = event.target;
            if(target === selectBtn || selectBtn.contains(target)) {
                return;
            }
            optionMenu.classList.remove("active");
            console.log("Clicked Off Button")
        }
        document.addEventListener("click", isSelectorClicked);


        //Copy code to clipboard
        const copyTextButton = document.querySelector(".copyText");
        function copyToClipboard() {
            //let textToCopy = document.querySelector(".codeDisplay")
            let codeText = document.getElementById("copyThis");
            textToCopy = codeText.textContent || codeText.innerText;

            var textarea = document.createElement('textarea');
            textarea.value = textToCopy;

            document.body.appendChild(textarea);

            textarea.select();
            document.execCommand('copy');

            document.body.removeChild(textarea);

            console.log("Copied")
        }

        const elementsToDarken = document.querySelectorAll(".codeAreaLeftContainer, .codeAreaRightContainer, .explanationAreaRightContainer, .explanationAreaLeftContainer")
        function rah1() {
            elementsToDarken.forEach((elementsToDarkenn) => {
                    elementsToDarkenn.style.backgroundColor = "red";
                    console.log("Foreaxh is workign");
                })
        }
        rah1();

        function rah2() {
            elementsToDarken.forEach((elementsToDarkenn) => {
                    elementsToDarkenn.style.backgroundColor = "red";
                    console.log("Foreaxh is workign");
                })
        }
        rah2();

        const darkModeButton = document.getElementById("darkModeButton");
        function darkMode() {
            if(darkModeButton.classList.contains("dark")) {
                darkModeButton.classList.toggle("dark");
                darkModeButton.style.backgroundColor = "white";
                darkModeButton.style.color = "black";
                darkModeButton.innerHTML = "L";
                rah1();
            } else {
                darkModeButton.classList.toggle("dark");
                darkModeButton.style.backgroundColor = "black";
                darkModeButton.style.color = "white";
                darkModeButton.innerHTML = "D";
                rah2();
            }
        }