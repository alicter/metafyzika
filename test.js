var cisloOtazky = 0;
var pole7 = new Array;
var poleOVyrokMene = new Array;
var poleVyhodnoceniVyroku= new Array;
var poleZaskrtunte = new Array;
var k, i10, i11, i12, i13,i14 ,i15, kteryBox;
var pocetBodu = 0;
var procenta = 0;
nacti();
function nacti() {
    for ( i15 = 0; i15 < poleVyrok.length; i15++) { 
        poleZaskrtunte[i15] = false;
    };
    document.getElementById('otazkaP').innerHTML = otazka_prom;
    document.getElementById('obrazekTest').src = "obrazky/" +  poleObrazky[cisloOtazky] ;
    document.getElementById('otazka').innerText = poleOtazka[cisloOtazky];
    for ( i12 = 0; i12 < 8; i12++) {
        poleOVyrokMene[i12] = poleVyrok[i12] ;        
    };
    for ( i10 = 0; i10 < 8; i10++) {
        k = Math.floor(Math.random() * poleOVyrokMene.length);           
        pole7[i10] = poleOVyrokMene[k];  
        poleOVyrokMene.splice(k, 1);                       
    };
    for ( i11 = 0; i11<8; i11++) {
   document.getElementById('radekVyroku'+ i11).innerHTML =   pole7[i11].tvrzeni;
   poleVyhodnoceniVyroku[i11] = pole7[i11].pravdivost;      
}
};

function zaskrtnout(kteryBox) {
 if (document.getElementById('chB'+ kteryBox).checked == false)  {
document.getElementById('chB'+ kteryBox).checked = true;
poleZaskrtunte[kteryBox + (8 * cisloOtazky)] = true;
 }else {
document.getElementById('chB'+ kteryBox).checked = false;
poleZaskrtunte[kteryBox + (8 * cisloOtazky)] = false;
 }
};

function klikni() {
    cisloOtazky = cisloOtazky +1;
if (cisloOtazky < poleOtazka.length) {
    document.getElementById('obrazekTest').src = "obrazky/" +  poleObrazky[cisloOtazky] ;
    document.getElementById('otazka').innerText = poleOtazka[cisloOtazky];
    for ( i12 = (cisloOtazky * 8); i12 <  (cisloOtazky * 8 + 8 )  ; i12++) {
        poleOVyrokMene[i12 % 8] = poleVyrok[i12] ;                       
    };
    for ( i10 = 0; i10 < 8; i10++) {
        k = Math.floor(Math.random() * poleOVyrokMene.length);           
        pole7[i10] = poleOVyrokMene[k];  
        poleOVyrokMene.splice(k, 1);                       
    };
    for ( i11 = 0; i11<8; i11++) {
        document.getElementById('radekVyroku'+ i11).innerHTML =   pole7[i11].tvrzeni;
         poleVyhodnoceniVyroku[i11 + cisloOtazky * 8] = pole7[i11].pravdivost;   
    }
} else 
{
 vyhodnot ();
}  
};

function  vyhodnot() {
    for(i14=0; i14 < poleVyrok.length; i14++) {
 if (poleZaskrtunte[i14] == poleVyhodnoceniVyroku[i14] ) pocetBodu = pocetBodu + 1;
    };
    document.getElementById("obrazekTest").style.visibility = "hidden";
        document.getElementById("rovnaciDiv").style.visibility = "hidden";
        document.getElementById("cudlik").style.visibility = "hidden";
        procenta = (pocetBodu / poleVyrok.length) *100; 
  document.getElementById("otazka").innerHTML = "Počet bodů máte: " + pocetBodu + "/" + poleVyrok.length +". Zvládl/a jste to na " + procenta + "%. ";  

}