import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './galaxy.js';

window.addEventListener("load", function () {
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
  person.addVenusAge();
  person.addMarsAge();
  person.addJupiterAge();
  person.ageSinceBirthday(youngerAge);
  person.yearsUntilBirthday(olderAge);
  displayDates(person);
}

function displayDates(person) {
  const displayValue = document.querySelector('#results-field');
  displayValue.innerText = `${person.name} is ${person.age} Earth years old, ${person.murcuryAge} Murcury years old,`;
}