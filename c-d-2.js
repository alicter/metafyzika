var otazka_prom;
otazka_prom = "Zaškrtni všechna pravdivá tvrzení, která se dají říct o tomto východisku:";
var poleOtazka = new Array;
var poleVyrok  = new Array;
var poleObrazky = new Array;
class vyrok {
    constructor(tvrzeni, pravdivost) {
        this.tvrzeni = tvrzeni;
        this.pravdivost = pravdivost;
    }
 
}

poleObrazky[poleObrazky.length] = "kamen.jpg";
poleOtazka[poleOtazka.length] = "Nalezl jsme tento kámen.";

poleVyrok[poleVyrok.length] = new vyrok ("Tento kámen je jsoucno.", true);
poleVyrok[poleVyrok.length] = new vyrok ("Tráva u kamene je jsoucno.", true);
poleVyrok[poleVyrok.length] = new vyrok ("Tento kámen má rozumovou duši.", false);
poleVyrok[poleVyrok.length] = new vyrok ("Tento kámen má smyslovou duši.", false);
poleVyrok[poleVyrok.length] = new vyrok ("Tento kámen má vegetativní duši.", false);
poleVyrok[poleVyrok.length] = new vyrok ("Tento kámen nemá žádnou duši.", true);
poleVyrok[poleVyrok.length] = new vyrok ("Tráva u kamene nemá žádnou duši.", false);
poleVyrok[poleVyrok.length] = new vyrok ("Tráva u kamene má vegetativní duši.", true);


poleObrazky[poleObrazky.length] = "koza.jpg";
poleOtazka[poleOtazka.length] = "Potkal jsem kozu.";

poleVyrok[poleVyrok.length] = new vyrok ("Koza je jsoucno.", true);
poleVyrok[poleVyrok.length] = new vyrok ("Koza má smyslovou duši.", true);
poleVyrok[poleVyrok.length] = new vyrok ("Koza není jsoucno.", false);
poleVyrok[poleVyrok.length] = new vyrok ("Koza nemá žádnou duši.", false);
poleVyrok[poleVyrok.length] = new vyrok ("Koza má vegetativní duši.", false);
poleVyrok[poleVyrok.length] = new vyrok ("Koza má rozumovou duši.", false);
poleVyrok[poleVyrok.length] = new vyrok ("Esence kozy je to, co dělá kozu kozou.", true);
poleVyrok[poleVyrok.length] = new vyrok ("Kaza nemá esenci.", false);
