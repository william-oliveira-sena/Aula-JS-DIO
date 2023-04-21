function calcular(){
    
        totalcad = 0;
        consumos = [];

    const precoCombustivel = parseFloat(document.getElementById("precocombustivel").value);
    const KmPorLitro = parseFloat(document.getElementById("kmporlitro").value);
    const distanciaEmKm = parseFloat(document.getElementById("distanciaemkm").value);

        //let distanciaEmKm1 = parseFloat(distanciaEmKm);
       // let KmPorLitro1 = parseFloat(KmPorLitro);
       // let precoCombustivel1 = parseFloat(precoCombustivel);

        const litrosConsumidos = distanciaEmKm / KmPorLitro;
        const valorGasto = litrosConsumidos * precoCombustivel;

      //console.log (valorGasto);

      let consumo = {preco:precoCombustivel, kmlitro:KmPorLitro, distanciaEmKm:distanciaEmKm, valortotal:valorGasto};
      consumos[totalcad] = consumo;

      let elemento = document.getElementById("saida");

      elemento.innerHTML += "preco combustivel" + consumos[totalcad].preco +"<br>" + 
                            "km por litro" + consumos[totalcad].kmlitro + "<br>" +
                            "distancia total" + consumos[totalcad].distanciaEmKm +"<br>" +
                            "valor total gasto" + consumos[totalcad].valortotal;

      totalcad ++;
    }

//console.log(valorGasto.toFixed(2));
