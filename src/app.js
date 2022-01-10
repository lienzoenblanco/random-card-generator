/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  generateSuit();
  generateValue();
};

let generateSuit = () => {
  let suit = [
    { icon: "♦", color: "red" },
    { icon: "♥", color: "red" },
    { icon: "♠", color: "black" },
    { icon: "♣", color: "black" }
  ];
  let suitIndex = Math.floor(Math.random() * suit.length);
  let suitList = document.querySelectorAll(".suit");

  suitList.forEach(suitNode => {
    suitNode.innerHTML = suit[suitIndex].icon;
    suitNode.classList.add(`c-${suit[suitIndex].color}`);
  });
};

let generateValue = () => {
  let value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];
  let valueIndex = Math.floor(Math.random() * value.length);
  document.querySelector(".value").innerHTML = value[valueIndex];
};
