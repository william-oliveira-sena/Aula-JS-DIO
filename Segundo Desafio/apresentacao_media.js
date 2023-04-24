function calcularmedia(){

        var nota1 = document.getElementById("nota1").value;
        var nota2 = document.getElementById("nota2").value;
        var nota3 = document.getElementById("nota3").value;

        var resultado = "";
        var media = (nota1 + nota2 + nota3) / 3;

            if(media > 7){
               resultado = "passou de semestre";
            }
            else if(media < 5){
                resultado = "reprovação";
            }
            else{
               resultado = "recuperação";
            }

            document.getElementById("saida").innerHTML = "Sua média foi: " + media + "<br>" + "Seu resultado:" + resultado;
           
    }