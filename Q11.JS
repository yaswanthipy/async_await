// the displayMessage function
function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}

//the getUserInput function that accepts a callback
function getUserInput(callback) {
  console.log("Fetching username...");

  setTimeout(() => {
    const username = "Alice"; 
    callback(username);       /
  }, 1000);
}

getUserInput(displayMessage);
