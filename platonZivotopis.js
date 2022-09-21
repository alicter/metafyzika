init();
var elegance, eBool,eleganceKliknuti;
eBool = 1;
function zmena(cislo) {
eBool = cislo;
} 
var pruhlednost = 1;
  function init () {
    elegance =  setInterval( "op()", 10);
    eleganceKliknuti =  setInterval( "ops()", 10);

  }
  function op () {
 
   if (eBool==1) {
         if (pruhlednost >= 98) eBool = 0;
     pruhlednost = pruhlednost + 1;
  document.getElementById('hlavniDiv').style.opacity = (pruhlednost >= 10) ? '0.' + pruhlednost : '0.0' + pruhlednost;
    
   } else return;
 
  }


function opsHref (odkaz) {
  pruhlednost = pruhlednost - 1;
  document.getElementById('hlavniDiv').style.opacity = (pruhlednost >= 10) ? '0.' + pruhlednost : '0.0' +pruhlednost;
  if (pruhlednost <=2) window.location.href = odkaz;
};




  function ops () {
   if (eBool==2) { opsHref ("index.html") } 
   else return;
  }