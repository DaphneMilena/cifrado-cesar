function caesarCipher(){
  do{
    //preguntar si quiere cifrar o descifrar:
    var number = prompt("Indique el número de lo que desea hacer: 1) Cifrar o 2) Descifrar");
    //la respuesta no puede ser vacío:
    if(number != ""){
      //si (if) number es "1", entonces aplica Cipher:
      if(number == "1"){
        cipher();
        //si number es "2", entonces aplica Decipher:
      }else if (number == "2"){
        decipher();
        //si el usuario ingresa otro dígito, se mostrará un alert:
      }else{
        alert("Ingrese una opción válida");
      }
    }
    } while (number == "" || (number != "1" && number != "2"));
  }


  //si responde "1", prompt que pregunte por la palabra a cifrar:
  function cipher(answerOne){
    do{
      //Se pide al usuario que ingrese una palabra:
      var answerOne = prompt("Ingrese la palabra que desea cifrar");
      //No puede ser un campo vacío:
      } while (answerOne == "");
        //recorriendo la palabra ingresada:
        for (var i = 0; i < answerOne.length; i++){
          //Se aplica método mayúsculas:
          if(answerOne[i] === answerOne[i].toUpperCase());
          //Se aplica fórmula de conversión:
          var answerOneFinal = answerOne.charCodeAt(i);
          answerOneFinal = ((answerOneFinal -65 + 33) % 26 + 65);
          }
          //Devuelve un alert con el resultado final
          return alert("El resultado es " + answerOneFinal);
        }


    //si responde "2", prompt que pregunte por la palabra a descifrar:
    function decipher(answerTwo){
      do{
        //Se pide al usuario que ingrese una palabra:
        var answerTwo = prompt("Ingrese la palabra que desea descifrar");
        //No puede ser un campo vacío:
      } while (answerTwo == "");
        //recorriendo la palabra ingresada:
        for (var i = 0; i < answerTwo.length; i++){
          //Se aplica método mayúsculas:
          if(answerOne[i] === answerOne[i].toUpperCase());
          //Se aplica fórmula de conversión:
          var answerTwoFinal = answerTwo.charCodeAt(i);
          answerTwoFinal = ((answerTwoFinal -65 + 33) % 26 + 65);
          }
          //Devuelve un alert con el resultado final
          return alert("El resultado es " + answerOneFinal);
          }
