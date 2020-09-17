// Voitto numeron valitsija
  var y = Math.floor(Math.random() * 10 + 1);
var kerta = 0;
function arvaa()
{
  while(kerta <= 3)
  {
      kerta++;
      console.log(kerta);
    var x = document.getElementById("arvausalue").value;
    if(kerta > 3)
    {
      alert("Käytit kaikki kertasi");
    }
    else if(x == y && kerta <= 3)
    {
      alert("Voitit pelin! Yay :)");
      return false;
    }
    else if(x > y && kerta <= 3)
    /*Jos arvaat isomman numeron kuin voitto numeron niin saat tämän viestin*/
    {
    alert("Väärin! Kokeile pienempää numeroa");
    return false;
    }

    /*Jos arvaat pienemmän numeron kuin voitto numeron niin saat tämän viestin*/
    else if (x < y && kerta <= 3)
    {
      alert("Väärin! Kokeile isompaa numeroa");
      return false;
    }
  }
}
