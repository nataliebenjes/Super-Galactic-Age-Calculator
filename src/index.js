import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import person from './../src/galaxy.js';

window.addEventListener("load", function (){
  document.querySelector("form#person-info").addEventListener("submit", handleFormSubmission);
});

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedName = document.querySelector("#name").value;
  const inputtedAge = parseInt(document.querySelector("#value").value);
  const youngerAge = parseInt(document.querySelector("#youngerAge").value);
  const olderAge = parseInt(document.querySelector("#olderAge").value);
  let person = new Person(inputtedName, inputtedAge);
  person.addMurcuryAge();
  person .addVenusAge();
  person.addMarsAge ();
  person.addJupiterAge ();
  person.ageSinceBirthday();
  person.
  }

  function displayDates() {
    const displayValue = document.getElementById('results-field');
    displayValue.textContent = ;
}