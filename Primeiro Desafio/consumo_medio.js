function calcular(){
    
        totalcad = 0;
        consumos = [];

    var precoCombustivel = document.getElementById("precocombustivel").value;
    var KmPorLitro = document.getElementById("kmporlitro").value;
    var distanciaEmKm = document.getElementById("distanciaemkm").value;

        

        var litrosConsumidos = distanciaEmKm / KmPorLitro;
        var valorGasto = litrosConsumidos * precoCombustivel;

      

      var consumo = {preco:precoCombustivel, kmlitro:KmPorLitro, distanciaEmKm:distanciaEmKm, valortotal:valorGasto};
      consumos[totalcad] = consumo;

   document.getElementById("saida").innerHTML = "Preço combustivel: " + consumos[totalcad].preco +"<br>" + 
                                                "km por litro: " + consumos[totalcad].kmlitro + "<br>" +
                                                "Distancia total: " + consumos[totalcad].distanciaEmKm +"<br>" +
                                                 "Valor total gasto: " + valorGasto.toFixed(2);

      totalcad ++;
    }



