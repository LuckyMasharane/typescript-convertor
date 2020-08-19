// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var minutes = 60;
var hour = 1;

var totalminPerhour = hour * minutes;
var seconds = 0;

convert(totalminPerhour,minutes);
function convert(totalminPerhour,minutes){

  var seconds = totalminPerhour * minutes
  return seconds
}

console.log("Total Seconds = " + convert(totalminPerhour,minutes));

