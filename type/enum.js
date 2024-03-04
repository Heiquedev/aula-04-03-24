var Diasdasamena;
(function (Diasdasamena) {
    Diasdasamena[Diasdasamena["Segunda"] = 0] = "Segunda";
    Diasdasamena[Diasdasamena["Ter\u00E7a"] = 1] = "Ter\u00E7a";
    Diasdasamena[Diasdasamena["Quarta"] = 2] = "Quarta";
    Diasdasamena[Diasdasamena["Quinta"] = 3] = "Quinta";
    Diasdasamena[Diasdasamena["Sexta"] = 4] = "Sexta";
    Diasdasamena[Diasdasamena["S\u00E1bado"] = 5] = "S\u00E1bado";
    Diasdasamena[Diasdasamena["Domingo"] = 6] = "Domingo";
})(Diasdasamena || (Diasdasamena = {}));
console.log(Diasdasamena.Segunda);
console.log(Diasdasamena.Terça);
var Cores;
(function (Cores) {
    Cores["Verde"] = "00FF00";
    Cores["Vermelho"] = "FF0000";
    Cores["Azul"] = "0000FF";
})(Cores || (Cores = {}));
console.log(Cores.Verde);
var Direcoes;
(function (Direcoes) {
    Direcoes[Direcoes["Norte"] = 0] = "Norte";
    Direcoes[Direcoes["Sul"] = 1] = "Sul";
    Direcoes[Direcoes["Leste"] = 2] = "Leste";
    Direcoes[Direcoes["Oeste"] = 3] = "Oeste";
})(Direcoes || (Direcoes = {}));
for (var direcao in Direcoes) {
    console.log(direcao);
}
