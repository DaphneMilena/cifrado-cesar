//preguntar si quiere cifrar o descifrar
function principal(action){
  do{
    var action = prompt("Indique el número de lo que desea hacer: 1) Cifrar – 2) Descifrar");
    if(action != ""){
      if(action == "1"){
        option1();
        /////código para encriptar:
        function cipher(word1) {
          for (var i = 0; i < word1.length; i++){

          }

return word1.replace(/[A-Z]/g, c => ((word1(0)-65+33)%26+65))
             var c = word[i];
             ////////////////////////////////////



//////////////////////////////////:
      }else if (action == "2") {
        option2();
        //código para desencriptar:





      //else:
      } else {
        alert("Ingrese una opción válida");
      }
    }
  } while (action == "" || (answer != "1" && answer != "2"));
}

function option1(){
  alert("Ingrese una palabra");
}
function option2(){
  alert("Ingrese una palabra");
}

principal();
////////fin codigo//////////////

//mostrando resultados en un alert
function cifrar(){
  alert(//poner aquí función con el resultado);
}

function descifrar(){
  alert(//poner aquí función con el resultado);
}

principal();
