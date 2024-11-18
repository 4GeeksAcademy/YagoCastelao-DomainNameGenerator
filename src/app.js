/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronome = ["el", "nuestro", "su"];
  let adjetivo = ["genial", "grande", "asombroso"];
  let substantivo = ["corredor", "mapache", "perro", "mercador", "condutor"];

  for (let i = 0; i < pronome.length; i++) {
    for (let j = 0; j < adjetivo.length; j++) {
      for (let k = 0; k < substantivo.length; k++) {
        console.log(pronome[i] + adjetivo[j] + substantivo[k] + ".com");
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
