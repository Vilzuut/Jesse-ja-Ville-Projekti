
var merkit = ['muisti1.png','muisti2.png','muisti3.png','muisti4.png','muisti5.png','muisti6.png','muisti7.png','muisti8.png','muisti1.png','muisti2.png','muisti3.png','muisti4.png','muisti5.png','muisti6.png','muisti7.png','muisti8.png'];
var smerkki = 0;
var vanha = -1;
var valtti;

function luoTaulukko() {
   sekoitetut = sekoita(merkit);
   var paikka = document.getElementById('pelialue');
   var taulukko = document.createElement('table');
  var taulukonSisus = document.createElement('tbody');
  for(var i = 0; i < 4; i++)
  {
 
    var rivi = document.createElement('tr');

    for(var j = 0; j < 4; j++)
    {
      var solu = document.createElement('td');
      var sisus = document.createTextNode('');
      solu.setAttribute('alt', sekoitetut[(smerkki)]);
      solu.setAttribute('id', 'solu' + smerkki);
      solu.setAttribute('name', smerkki);
      solu.setAttribute('onclick', 'nayta('+smerkki+');');
      smerkki += 1;
      solu.appendChild(sisus);
      rivi.appendChild(solu);
    }
    
    taulukonSisus.appendChild(rivi);
  }
  taulukko.appendChild(taulukonSisus);
  paikka.appendChild(taulukko);
  taulukko.setAttribute('border', '2');
}

function sekoita(taulukko)
{
    taulukko.sort(function(a, b){return 0.5 - Math.random()});
    return taulukko;
}
function nayta(numero)
{
  var tunnus = document.getElementById('solu'+numero);
  var altti = tunnus.getAttribute('alt');
  if(vanha != -1)
  {
    valtti = vanha.getAttribute('alt');
  }
  else{
    valtti = vanha;
  }

  tunnus.innerHTML = '<img src="muistipeli kuvat/'+altti+'">';
  if(altti == valtti){
    var altti = tunnus.getAttribute('alt');
    vanha.innerHTML = '<img src="muistipeli kuvat/'+altti+'">';
    tunnus.innerHTML = '<img src="muistipeli kuvat/'+altti+'">';
  }
  else{
    vanha = tunnus;
    odota(tunnus);
  }
}

function odota(joku) {
  setTimeout(function(){
     joku.innerHTML = '';
   }, 1000);
}


