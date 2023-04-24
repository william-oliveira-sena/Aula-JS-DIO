
    var altura = 1.83;  //prompt("Digite sua altura em metros");
    var peso = 75; //prompt("Digite seu peso em Kg");

    var imc = peso / (altura * altura);

    imc2 = imc.toFixed(1);
    console.log("O IMC é:" + imc2);

    if(imc2 < 18.5){
        
            console.log(" Abaixo do peso");
        }       
    else if(imc2 >= 18.5 && imc2 < 25){
           console.log("Peso Normal");
        }            
    else if(imc2 >= 25 && imc2 < 30){
           console.log("Acima do peso");
            }
    else if(imc2 >=30 && imc2 < 40){
            console.log("Obesidade");
        }
    else
        console.log("Obesidade grave");
