// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks


// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function add(studentName) {
  roster.push(studentName)
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove(studentName) {
  var pos = roster.indexOf(studentName);
  roster.splice(pos, 1);

}
// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER
// Create a function called display that prints out the orster to the console.

function display() {
  console.log(roster);
}

function quit_app() {
  return true;

}
var action = prompt("Which action do you want to chose... add, remove, display, quit?");

// Start by asking if they want to use the web app
while(action !== "quit"){
  // var quit = false;

  if (action == "quit") {
    quit = quit_app();
    alert("Application Closing!");
  }
  else if (action == "add") {
    var studentName = prompt("Enter Name to be added ... ");
    add(studentName);
  }
  else if (action == "remove"){
    var studentName = prompt("which user name you want to remove? ")
  }

  else if (action == "display") {
      display();
  }
  else {
    alert("Enter only Valid actions!!!")
    action = "quit"
  }

}

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
