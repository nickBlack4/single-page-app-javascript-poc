/*
	objects/info to be stored in local storage and retrieved
*/


// let executive = {

// 	"collaborators": ["mario", "luigi"],
// 	"portrait": {
// 		"name": "Nicholas Cage",
// 		"photo_url": "blah"// attach urls here and populate slider?
// 	},
// 	"aliases": ["Nic", "Nick", "Nicholas", "Bossman"],
// 	"residence": ["USA", "Britain", "France"]
// }

/*
*	note the structure of the database here.
*  it is an object, with arrays that contain objects.
*  I believe in doing this, steve preserved the ability to use
* methods native to array prototype
*/

const localStorageKey = "nickStorage";

// initialize the database in memory as an object 
const HomeInventoryDatabase = {};

// Init all of the tables (i.e. arrays) that you want to use in DB

HomeInventoryDatabase.collaborators = ["mario", "luigi", "donald ducks"];
// filled (pushed) below with portraitInfo object
HomeInventoryDatabase.portrait = [];
HomeInventoryDatabase.aliases = ["Nic", "Nick", "Nicholas", "Bossman"];
HomeInventoryDatabase.residence = ["USA"];

// Create data that will be inserted into objects

// I used an object here since there were two types of things I wanted represented
// i.e. a name, and a photo.  I want to grab the url and use it to create
// an image object to display an image to the dom.  The case being that then
// we can populate any images we want to the dom as long as we have the url
const portraitInfo = {
	name: "Nicholas Cage",
	photo: "photoURLhereToCreateImageObjectAndSrcFrom",
}

// Add the data to the appropriate tables
HomeInventoryDatabase.portrait.push(portraitInfo);



// I needed to put saveDatabase in here so it had access to localStorage variable
const saveDatabase = function (databaseObject) {
    // convert the object into a string.
    const stringifiedDatabase = JSON.stringify(databaseObject);
    
    // create a key in local storage, and store the string version
    // of your inventory database as the value
  
    localStorage.setItem(localStorageKey, stringifiedDatabase);
}


// Persist the database to localStorage
saveDatabase(HomeInventoryDatabase, "HomeInventory");


