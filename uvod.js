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
   else if (eBool==3) { opsHref ("sokrates.html") } 
   else if (eBool==4) {opsHref ("sokratesZivotopis.html")  }
   else if (eBool==5) {opsHref ("platon.html")  }
   else if (eBool==6) {opsHref ("platonTexty.html")  }
   else if (eBool==7) {opsHref ("platonZivotopis.html")  }
   else if (eBool==8) {opsHref ("aristoteles.html")  }
   else if (eBool==9) {opsHref ("aristotelesTexty.html")  }
   else if (eBool==10) {opsHref ("aristotelesZivotopis.html")  }
   else if (eBool==11) {opsHref ("aristotelesVUmeni.html")  }
   else if (eBool==12) {opsHref ("tomasAkvinsky.html")  }
   else if (eBool==13) {opsHref ("tomasAkvinskyTexty.html")  }
   else if (eBool==14) {opsHref ("tomasAkvinskyZivotopis.html")  }
   else if (eBool==15) {opsHref ("tomasAkvinskyVUmeni.html")  }
   else if (eBool==16) {opsHref ("cvicebnice.html")  }
   else if (eBool==17) {opsHref ("ucitsePojmy.html")  }
   else if (eBool==18) {opsHref ("cvicitDefinice.html")  }
   else if (eBool==19) {opsHref ("testovatDefinice.html")  }
   else if (eBool==20) {opsHref ("videa.html")  }
   else return;
  }