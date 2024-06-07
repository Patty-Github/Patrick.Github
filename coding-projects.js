const javascriptPercentage = document.querySelectorAll(".javascriptPercentage");

javascriptPercentage.forEach((eachJavascriptPercentage) => {
    let getJavascriptPercentageWidth = eachJavascriptPercentage.offsetWidth;
    let eachJavascriptPercentageText = eachJavascriptPercentage.textContent;
    let eachJavascriptPercentagePercentage = eachJavascriptPercentageText.match(/\d+(\.\d+)?/g).map(Number);

    if(getJavascriptPercentageWidth < 55) {
        eachJavascriptPercentage.innerHTML = eachJavascriptPercentagePercentage + "%" + " " + "JS"
    }
})