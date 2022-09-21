
textovaoblast = document.createElement('textarea');
textovaoblast.id = "textik";
textovaoblast.innerText = otazka_prom;
document.getElementById('hlavniDiv').appendChild(textovaoblast);
document.getElementById('textik').style.position = "absolute";
document.getElementById('textik').style.left = "150px";
document.getElementById('textik').style.top = "150px";
document.getElementById('textik').style.width = "400px";
document.getElementById('textik').style.padding = "50px";
document.getElementById('textik').style.resize = "none";
document.getElementById('textik').disabled = "true";

cudlik = document.createElement('button');
cudlik.id = "cudlik";
cudlik.innerText = "HOTOVO";
document.getElementById('hlavniDiv').appendChild(cudlik);
document.getElementById('cudlik').style.background = "rgba(50, 150, 180)";
document.getElementById('cudlik').style.position = "absolute";
document.getElementById('cudlik').style.left = document.getElementById('textik').offsetLeft + (document.getElementById('textik').offsetWidth / 2) + 10 + "px";
document.getElementById('cudlik').style.top = document.getElementById('textik').offsetTop + document.getElementById('textik').offsetHeight + 10 +  "px";
document.getElementById('cudlik').onclick = hotovo;

function inita() {
    setInterval(posun, 1);
   var casovac = setInterval(pridej_cas, 1);
};
inita();
stopky = 0;
function pridej_cas() {
    stopky = stopky + 1;
};
function vyber_levy() {
    cislo_levy1 = parseInt(i3.slice(3));
    jmeno_levy = i3;

    document.getElementById(jmeno_levy).style.border = "3px solid";
};


function vyber() {
    cislo_pravy1 = parseInt(i2.slice(3));
    jmeno_pravy = i2;
    document.getElementById(i2).style.border = "3px solid";

};

var pole7 = new Array;
var pole6 = new Array;
var pole5 = new Array;
var pole4 = new Array;
var pole3 = new Array;
var pole2 = new Array;


var cislo_levy2, x, y, k, pocet_bodu, jmeno_pravy, jmeno_levy, cislo_levy1, cislo_pravy1, jmeno_pravy_poradi, pocet_divu, nahoda, i, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11;
cislo_levy1 = undefined;
cislo_pravy1 = undefined;
pocet_bodu = 0;



for (i9 = 0; i9 < pole1.length; i9++) {
    pole6[i9] = i9 * 200;                             //mám nějaký počet polí
};
for (i10 = 0; i10 < pole1.length; i10++) {
    k = Math.floor(Math.random() * pole6.length);           //náhodně vytáhnu jedno z nich
    pole7[i10] = pole6[k];                      // pozici uložím
    pole6.splice(k, 1);                         // odstraním z pole
};



for (i6 = 0; i6 < pole1.length; i6++) pole5[i6] = 0;
for (i11 = 0; i11 < pole1.length; i11++) pole4[i11] = i11 + 1;
for (i = 0; i < pole1.length; i++) {
    pole2[i] = document.createElement("div");
    pole2[i].id = "prp" + i;
    document.getElementById('hlavniDiv').appendChild(pole2[i]);
    document.getElementById(pole2[i].id).innerHTML = "<br>" + pole1[i];
    document.getElementById(pole2[i].id).style.border = "1px solid";
    document.getElementById(pole2[i].id).style.position = "absolute";
    document.getElementById(pole2[i].id).style.width = "150px";
    document.getElementById(pole2[i].id).style.height = "180px";
    document.getElementById(pole2[i].id).style.top = pole7[i] + 400 + "px"; // 
    document.getElementById(pole2[i].id).style.left = "400px";
    document.getElementById(pole2[i].id).style.zIndex = 1;
    document.getElementById(pole2[i].id).addEventListener("click", function () { i2 = this.getAttribute("id"); vyber(); });
};

for (i1 = 0; i1 < pole1.length; i1++) {
    pole3[i1] = document.createElement("div");
    pole3[i1].id = "prl" + i1;
    document.getElementById('hlavniDiv').appendChild(pole3[i1]);
    document.getElementById(pole3[i1].id).innerHTML = pole_leve[i1];
    document.getElementById(pole3[i1].id).style.textAlign = "right";
    document.getElementById(pole3[i1].id).style.border = "1px dashed";
    document.getElementById(pole3[i1].id).style.position = "absolute";
    document.getElementById(pole3[i1].id).style.width = "180px";
    document.getElementById(pole3[i1].id).style.height = "180px";
    document.getElementById(pole3[i1].id).style.top = i1 * 200 + 400 + "px";
    document.getElementById(pole3[i1].id).style.left = "50px";
    document.getElementById(pole3[i1].id).style.zIndex = 0;
    document.getElementById(pole3[i1].id).addEventListener("click", function () { i3 = this.getAttribute("id"); vyber_levy(); });



};





function posun() {
    if (cislo_levy1 >= 0 && cislo_pravy1 >= 0) {
        if (document.getElementById(jmeno_pravy).offsetLeft > document.getElementById(jmeno_levy).offsetLeft) document.getElementById(jmeno_pravy).style.left = (document.getElementById(jmeno_pravy).offsetLeft - 5) + "px";
        if (document.getElementById(jmeno_pravy).offsetLeft < document.getElementById(jmeno_levy).offsetLeft) document.getElementById(jmeno_pravy).style.left = (document.getElementById(jmeno_pravy).offsetLeft + 5) + "px";
        if (document.getElementById(jmeno_pravy).offsetTop > document.getElementById(jmeno_levy).offsetTop) document.getElementById(jmeno_pravy).style.top = (document.getElementById(jmeno_pravy).offsetTop - 5) + "px";
        if (document.getElementById(jmeno_pravy).offsetTop < document.getElementById(jmeno_levy).offsetTop) document.getElementById(jmeno_pravy).style.top = (document.getElementById(jmeno_pravy).offsetTop + 5) + "px";
        if (document.getElementById(jmeno_pravy).offsetLeft == document.getElementById(jmeno_levy).offsetLeft && document.getElementById(jmeno_pravy).offsetTop == document.getElementById(jmeno_levy).offsetTop) {
            pole5[cislo_pravy1] = cislo_levy1 + 1;
            cislo_levy1 = undefined;
            cislo_pravy1 = undefined;
            document.getElementById(jmeno_levy).style.border = "1px solid";
            document.getElementById(jmeno_pravy).style.border = "1px solid";
            document.getElementById(jmeno_pravy).style.background = "linear-gradient(to bottom, #ffffff -90%, rgba(60, 120, 130, 0.5) 90%)";

        } else {
            document.getElementById(jmeno_pravy).style.background = "transparent";
        };
    };

};


function hotovo() {
    casovac = stop;

    for (i7 = 0; i7 < pole1.length; i7++) {
        if (pole5[i7] == pole4[i7]) pocet_bodu = pocet_bodu + 1;
    };


    for (i8 = 0; i8 < pole1.length; i8++) {
        pole2[i8].style.visibility = "hidden";
        pole3[i8].style.visibility = "hidden";
    };

    document.getElementById("textik").style.visibility = "visible";
    document.getElementById("textik").value = "Body:" + pocet_bodu + "/" + pole1.length + " za: "+ stopky + " milisekund";
    document.getElementById("cudlik").style.visibility = "hidden";
};




