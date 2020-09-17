function lahetys()
{
<<<<<<< HEAD
var empt = document.inputs["etunimi"]["sukunimi"].value;
if (empt == "")
{
alert("Et täyttänyt kaikkia kohtia");
return false;
}
else
{
return true;
}
=======
  var en = document.getElementById('etunimi').value;
  var su = document.getElementById('sukunimi').value;
  var va2 = document.getElementById('pelaaja').checked;
  var va3 = document.getElementById('opiskelija').checked;
  var va4 = document.getElementById('enkayta').checked;
  var pa1 = document.getElementsByName('pallo');


    /*Etunimen tarkistus*/
    if(en == '')
    {
      alert("Et ole täyttänyt etunimeä");
      document.getElementById('etunimi').focus;
    }


/*Sukunimen tarkistus*/
        if(su == '')
        {
          alert("Et ole täyttänyt sukunimeä");
          document.getElementById('sukunimi').focus;
        }

/*Tietokoneen käyttäjä tarkistus*/
      if(va2 == 0 && va3 == 0 && va4 == 0)
      {
        alert("Et kertonut minkälainen tietokoneen käyttäjä olet");
        document.getElementById('valiotsikko2').focus;
      }


      /*Radio-painikkeiden tarkistus*/
      var vastaus = 0;

      for (var i=0; i < pa1.length;i++)
      {
        if (pa1[i].checked==true)
        {
          vastaus=1;
        }
      }
      if(vastaus == 0)
      {
        alert("Et ole valinnut pallukoita");
      }


/*Lempi oppiaineen tarkistus*/
  if(va4 = 0)
  {
    alert("Et kertonut lempi oppiainettasi");
    document.getElementById('oppiaine').focus;
  }

>>>>>>> 328cd0369899aac6897c0de3a2221fb767445613
}
