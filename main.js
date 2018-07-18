

function myFunction() {
    let myText = getContentWindow();
    myText.innerHTML += "adfasdfasdfadfgadfasdfasdfadsfd";
}



function getContentWindow() {
    const contentWindow = document.getElementById("contentWindow");
    // console.log("contentWindow object exists: " + contentWindow);
    return contentWindow;
}