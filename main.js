
// function declaration
function myFunction() {
    let myText = getContentWindow();
    myText.innerHTML += "adfasdfasdfadfgadfasdfasdfadsfd";
}



function getContentWindow() {
    const contentWindow = document.getElementById("contentWindow");
    // console.log("contentWindow object exists: " + contentWindow);
    return contentWindow;
}

/*
    In the code below, you will see how to use the JSON.stringify method which allows you to take an in-memory object, and convert it to a string representation of the object that can be saved in local storage. This is important, because only strings can be saved in local storage.
*/
const saveDatabase = function (databaseObject) {
    // convert the object into a string.
    const stringifiedDatabase = JSON.stringify(databaseObject);
    
    // create a key in local storage, and store the string version
    // of your inventory database as the value
  
    localStorage.setItem(localStorageKey, stringifiedDatabase);
}

/*
    To get the value back out of local storage so that it can be used in our application as an actual object again, we need to use the localStorage.getItem() method. We send in an argument value that is the name of the key we want to retrieve. Let's put these instructions in a function named loadDatabase.
*/

// function expression 
// loadDatabase can be invoked with loadDatabase()
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey);
    // use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString);
}



// call myFunction() to display data in container w/ id contentWindow
myFunction();
const myData = loadDatabase("nickStorage");

// for (let i=0; i < myData.length; i++) {
//     console.log(myData.i);
// }

// for (let x in myData) {
//     console.log(x, myData[x]);
// }

// object with arrays that contain objects
for (let key in myData) {
    for (let i=0; i < myData[key].length; i++) {
        const currentItem = myData[key][i];
        console.log(currentItem.name);
    }
   
}

