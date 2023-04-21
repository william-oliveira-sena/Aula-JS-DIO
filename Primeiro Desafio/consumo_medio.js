function calcular(){
    
        totalcad = 0;
        consumos = [];

    var precoCombustivel = document.getElementById("precocombustivel").value;
    var KmPorLitro = document.getElementById("kmporlitro").value;
    var distanciaEmKm = document.getElementById("distanciaemkm").value;

        //let distanciaEmKm1 = parseFloat(distanciaEmKm);
       // let KmPorLitro1 = parseFloat(KmPorLitro);
       // let precoCombustivel1 = parseFloat(precoCombustivel);

        var litrosConsumidos = distanciaEmKm / KmPorLitro;
        var valorGasto = litrosConsumidos * precoCombustivel;

      //console.log (valorGasto);

      //var consumo = {preco:precoCombustivel, kmlitro:KmPorLitro, distanciaEmKm:distanciaEmKm, valortotal:valorGasto};
      //consumos[totalcad] = consumo;

   document.getElementById("saida").innerHTML = "valor total gasto" + valorGasto;

      totalcad ++;
    }

//console.log(valorGasto.toFixed(2));
//"preco combustivel" + consumos[totalcad].preco +"<br>" + 
//"km por litro" + consumos[totalcad].kmlitro + "<br>" +
//"distancia total" + consumos[totalcad].distanciaEmKm +"<br>" +
