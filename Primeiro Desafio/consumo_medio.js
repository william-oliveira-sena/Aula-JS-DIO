function calcular(){
    
        totalcad = 0;
        consumos = [];

    var precoGasolina = document.getElementById("precogasolina").value;
    var precoEtanol = document.getElementById("precoetanol").value;
    var combustivel = document.getElementById("combustivelutilizado").value;
    var KmPorLitro = document.getElementById("kmporlitro").value;
    var distanciaEmKm = document.getElementById("distanciaemkm").value;

        if(combustivel == "gasolina" || combustivel == "Gasolina"){

              var litrosConsumidos = distanciaEmKm / KmPorLitro;
              var valorGasto = litrosConsumidos * precoGasolina;
      }else if(combustivel == "etanol" || combustivel == "Etanol"){

              var litrosConsumidos = distanciaEmKm / KmPorLitro;
              var valorGasto = litrosConsumidos * precoEtanol;
      }
      

      var consumo = {precogasolina:precoGasolina, precoetanol:precoEtanol, combust:combustivel, kmlitro:KmPorLitro, distanciaEmKm:distanciaEmKm, valortotal:valorGasto};
      consumos[totalcad] = consumo;

   document.getElementById("saida").innerHTML = "Preço Gasolina: " + consumos[totalcad].precogasolina +"<br>" + 
                                                "Preço Etanol: " + consumos[totalcad].precoetanol +"<br>" + 
                                                "Combustível: " + consumos[totalcad].combust +"<br>" + 
                                                "km por litro: " + consumos[totalcad].kmlitro + "<br>" +
                                                "Distancia total: " + consumos[totalcad].distanciaEmKm +"<br>" +
                                                 "Valor total gasto: " + valorGasto.toFixed(2);

      totalcad ++;
    }



