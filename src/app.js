/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  function excusa(pronoun, subject, action, possetion, where) {}
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["My", "The"];
  let subject = ["Dog", "Girlfriend", "Clown"];
  let action = ["Found a", "Broke my"];
  let possetion = ["Sneke toy", "Phone", "Cake"];
  let where = ["In the Bathroom", "In the Party", "In my house", "In the park"];

  let pronounIndx = Math.floor(Math.random() * pronoun.length);
  let subjecttIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let possetionIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndx] +
    " " +
    subject[subjecttIndx] +
    " " +
    action[actionIndx] +
    " " +
    possetion[possetionIndx] +
    " " +
    where[whereIndx]
  );
};
