 
var turn1 = true; 
var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var boton4 = document.getElementById("boton4");
var boton5 = document.getElementById("boton5");
var boton6 = document.getElementById("boton6");
var boton7 = document.getElementById("boton7");
var boton8 = document.getElementById("boton8");
var boton9 = document.getElementById("boton9");


function changeButton(boton) {
  boton.disabled = true;
    if (turn1 == true) {
        boton.style="color:blue";
         turn1 = false;
         ganaste();
        }
      else if (turn1 == false) {
        boton.style="color:red"
         turn1 = true;
         ganaste();
      }
}
  function startTheGame(){
    reset();

  if (document.getElementById("winner").innerHTML == "JUEGA") {
    document.getElementById("winner").innerHTML = "Ta Te Ti";
  }
}

function ganaste(){
  //red
  //horizontal
  if (boton1.style.color == "red" && boton2.style.color == "red" && boton3.style.color == "red"){
  document.getElementById("winner").innerHTML = "Ganaron rojos.";
  }
    if (boton4.style.color == "red" && boton5.style.color == "red" && boton6.style.color == "red"){
  document.getElementById("winner").innerHTML = "Ganaron rojos.";
  }
    if (boton7.style.color == "red" && boton8.style.color == "red" && boton9.style.color == "red"){
  document.getElementById("winner").innerHTML = "Ganaron rojos.";
  }
  //vertical
  if (boton1.style.color == "red" && boton4.style.color == "red" && boton7.style.color == "red"){
  document.getElementById("winner").innerHTML = "Ganaron rojos.";
  }
   if (boton2.style.color == "red" && boton5.style.color == "red" && boton8.style.color == "red"){
  document.getElementById("winner").innerHTML = "Ganaron rojos.";
  }
   if (boton3.style.color == "red" && boton6.style.color == "red" && boton9.style.color == "red"){
  document.getElementById("winner").innerHTML = "Ganaron rojos.";
  }
  //crossed
   if (boton1.style.color == "red" && boton5.style.color == "red" && boton9.style.color == "red"){
  document.getElementById("winner").innerHTML = "Ganaron rojos.";
  } 
   if (boton3.style.color == "red" && boton5.style.color == "red" && boton7.style.color == "red"){
  document.getElementById("winner").innerHTML = "Ganaron rojos.";
  }
//blue
  //horizontal
  if (boton1.style.color == "blue" && boton2.style.color == "blue" && boton3.style.color == "blue"){
  document.getElementById("winner").innerHTML = "Ganaron azules.";
  }
    if (boton4.style.color == "blue" && boton5.style.color == "blue" && boton6.style.color == "blue"){
  document.getElementById("winner").innerHTML = "Ganaron azules.";
  }
    if (boton7.style.color == "blue" && boton8.style.color == "blue" && boton9.style.color == "blue"){
  document.getElementById("winner").innerHTML = "Ganaron azules.";
  }
  //vertical
  if (boton1.style.color == "blue" && boton4.style.color == "blue" && boton7.style.color == "blue"){
  document.getElementById("winner").innerHTML = "Ganaron azules.";
  }
   if (boton2.style.color == "blue" && boton5.style.color == "blue" && boton8.style.color == "blue"){
  document.getElementById("winner").innerHTML = "Ganaron azules.";
  }
   if (boton3.style.color == "blue" && boton6.style.color == "blue" && boton9.style.color == "blue"){
  document.getElementById("winner").innerHTML = "Ganaron azules.";
  }
  //crossed
   if (boton1.style.color == "blue" && boton5.style.color == "blue" && boton9.style.color == "blue"){
  document.getElementById("winner").innerHTML = "Ganaron azules.";
  } 
   if (boton3.style.color == "blue" && boton5.style.color == "blue" && boton7.style.color == "blue"){
  document.getElementById("winner").innerHTML = "Ganaron azules.";
  }
  if (document.getElementById("winner").innerHTML == "Ganaron azules." || document.getElementById("winner").innerHTML == "Ganaron rojos."){
    disableAll();
  document.getElementById("empezar").innerHTML = "De nuevo?";
  }
}

function disableAll(){
  // let boton_list = [boton1, boton2, boton3, boton4, boton5, boton6, boton7, boton8, boton9];
  boton1.disabled = true;
  boton2.disabled = true;
  boton3.disabled = true;
  boton4.disabled = true;
  boton5.disabled = true;
  boton6.disabled = true;
  boton7.disabled = true;
  boton8.disabled = true;
  boton9.disabled = true;
}

function reset() {
  document.getElementById("winner").innerHTML = "JUEGA";
  document.getElementById("empezar").innerHTML = "Juega";

  boton1.disabled = false;
  boton2.disabled = false;
  boton3.disabled = false;
  boton4.disabled = false;
  boton5.disabled = false;
  boton6.disabled = false;
  boton7.disabled = false;
  boton8.disabled = false;
  boton9.disabled = false;
  colorReset();
}

function colorReset() {
  if (document.getElementById("empezar").innerHTML == "Juega"){
    boton1.style.color = "black";
    boton2.style.color = "black";
    boton3.style.color = "black";
    boton4.style.color = "black";
    boton5.style.color = "black";
    boton6.style.color = "black";
    boton7.style.color = "black";
    boton8.style.color = "black";
    boton9.style.color = "black";
    }
}
