import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
   let who = ["Mi perro", "Un primo lejano", "El vecino", "Un fantasma", "Mi profesor"];
   let action = ["se comió", "perdió", "rompió", "se llevó", "mojó"];
   let what = ["mi tarea", "el proyecto final", "mi mochila", "el informe", "los deberes"];
   let when = ["en el baño", "antes de venir", "por accidente", "durante un apagón", "sin querer"];

   let sujeto = Math.floor(Math.random() * what.length);
   let accion = Math.floor(Math.random() * action.length);
   let que = Math.floor(Math.random() * what.length);
   let donde = Math.floor(Math.random() * when.length);

   const id = document.getElementById("excuse");
   id.innerHTML = (who[sujeto] + " " + action[accion] + " " + what[que] + " " + when[donde]);

  console.log(who[sujeto] + " " + action[accion] + " " + what[que] + " " + when[donde]);
};
