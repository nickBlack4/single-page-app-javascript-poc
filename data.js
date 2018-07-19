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
// 	"residences": ["USA", "Britain", "France"]
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

HomeInventoryDatabase.furniture = [];
HomeInventoryDatabase.crafts = [];
HomeInventoryDatabase.electronics = [];

// Create data that will be inserted into objects

const vintageInkwell = {
	
	name: "Vintage Ink Well",
	location: "Writing desk",
	description: "I enjoy this inkwell because it belonged to pop"
}

const writingDesk = {
	
	
	name: "Shaker writing desk",
	location: "Bedroom",
	description: "This antique desk blah blah"
}

const saveDatabase = function (databaseObject) {
    // convert the object into a string.
    const stringifiedDatabase = JSON.stringify(databaseObject);
    
    // create a key in local storage, and store the string version
    // of your inventory database as the value
  
    localStorage.setItem(localStorageKey, stringifiedDatabase);
}

// Add the data to the appropriate tables
HomeInventoryDatabase.crafts.push(vintageInkwell);
HomeInventoryDatabase.furniture.push(writingDesk);

// Persist the database to localStorage
saveDatabase(HomeInventoryDatabase, "HomeInventory");


