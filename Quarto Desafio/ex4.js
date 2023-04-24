/*
1 - á vista débito, recebe 10% de desconto;
2 - á vista no dinheiro ou pix, recebe 15% de desconto;
3 - crédito em duas vezes, preço normal sem juros;
4 - Crédito mais duas vezes, preço normal mais juros 10%;


*/
var preco_produto = 5.00;
var condicaoPagamento = 1;

    if(condicaoPagamento == 1){
        var total = preco_produto - (preco_produto * 0.15);
        console.log(total);
    }else if(condicaoPagamento == 1){
        var total = preco_produto - (preco_produto * 0.15);
        console.log(total);
    }else if(condicaoPagamento == 2){
         var total = preco_produto - (preco_produto * 0.1);
        console.log(total);
    }else if(condicaoPagamento == 3){
         console.log(preco_produto);
    }else{
        var total = preco_produto + (preco_produto * 0.1);
        console.log(total);
    }