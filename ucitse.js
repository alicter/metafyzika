var pokracovatCislo = -1;
function pokracovat() {
    pokracovatCislo = pokracovatCislo +1;
   if (pokracovatCislo >= pole1.length) pokracovatCislo = 0;
   eBool1 =2;
}
cas();
function cas () {
    var casuj = setInterval("zmenNaDalsiKartu()", 1 ); 
};
var eBool1 =1;
var pruhlednost1 = 0;
function zmenNaDalsiKartu() {
    if (eBool1==1) {
        if (pruhlednost1 >= 98) eBool1 = 0;
    pruhlednost1 = pruhlednost1 + 1;
 document.getElementById('ucitseDiv').style.opacity = (pruhlednost1 >= 10) ? '0.' + pruhlednost1 : '0.0' + pruhlednost1;
   
  }
  else if (eBool1==2) {
    pruhlednost1 = pruhlednost1 - 1;
    document.getElementById('ucitseDiv').style.opacity = (pruhlednost1 >= 10) ? '0.' + pruhlednost1 : '0.0' +pruhlednost1;
    if (pruhlednost1 <= 2)  {
        
         document.getElementById('pojemH3').innerHTML = pole_leve[pokracovatCislo]; 
         document.getElementById('pojemH4').innerHTML = pole1[pokracovatCislo];
        eBool1 = 1;
    } } else return;

}