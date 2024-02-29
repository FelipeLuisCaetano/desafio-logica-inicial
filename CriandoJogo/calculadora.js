

var quantidadeVitorias = 101;
var quantidadeDerrotas = 0;
var saldoVitorias = calcularRanking(quantidadeVitorias, quantidadeDerrotas);
var nivel = retornarNivel(saldoVitorias);

console.log("O Herói tem de saldo de **{"+saldoVitorias+"}** está no nível de **{"+nivel+"}**");

function calcularRanking(quantidadeVitorias, quantidadeDerrotas) {
    return quantidadeVitorias - quantidadeDerrotas;
}

function retornarNivel(numeroVitorias) {
    if (numeroVitorias <= 10) {
        nivel = "ferro";
    }
    else if (numeroVitorias >= 11 && numeroVitorias <= 20 ) {
        nivel = "bronze";
    }
    else if (numeroVitorias >= 21 && numeroVitorias <= 50 ) {
        nivel = "prata";
    }
    else if (numeroVitorias >= 51 && numeroVitorias <= 70 ) {
        nivel = "ouro";
    }
    else if (numeroVitorias >= 81 && numeroVitorias <= 90 ) {
        nivel = "diamante";
    }
    else if (numeroVitorias >= 91 && numeroVitorias <= 100 ) {
        nivel = "lendario";
    }    
    else if (numeroVitorias >= 101) {
        nivel = "imortal";
    }  
    
    return nivel;
}
  