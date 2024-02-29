let nome = "felipe";
var nivel;
let quantidadeExperiencia = 10001;

if (quantidadeExperiencia <= 1000) {
    nivel = "ferro";
}
else if (quantidadeExperiencia >= 1001 && quantidadeExperiencia <= 2000 ) {
    nivel = "bronze";
}
else if (quantidadeExperiencia >= 2001 && quantidadeExperiencia <= 5000 ) {
    nivel = "prata";
}
else if (quantidadeExperiencia >= 5001 && quantidadeExperiencia <= 7000 ) {
    nivel = "ouro";
}
else if (quantidadeExperiencia >= 7001 && quantidadeExperiencia <= 8000 ) {
    nivel = "platina";
}
else if (quantidadeExperiencia >= 8001 && quantidadeExperiencia <= 9000 ) {
    nivel = "ascendente";
}
else if (quantidadeExperiencia >= 9001 && quantidadeExperiencia <= 10000 ) {
    nivel = "imortal";
}
else if (quantidadeExperiencia >= 10001) {
    nivel = "radiante";
}

console.log("O Herói de nome **{" + nome + "}** está no nível de **{"+ nivel+"}**");
