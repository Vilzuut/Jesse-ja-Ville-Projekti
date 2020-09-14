function lomakkeenTarkastus()
{
  var nimi=lomake.nimi.value;
  var sahkoposti = lomake.email.value;
  var ika = Number(lomake.ika.value);
  var minimi = Number(lomake.ika.min);
  var maksimi = Number(lomake.ika.max);
  var valinta1 = lomake.ryhma.value;
  var valinta2 = lomake.mika_attribuutti.value;
  var mika_ryhma = lomake.ryhma.value;
  var suositus = lomake.suosittelu.value;
  var kehitys = lomake.kehitys.value;
  if(nimi.length < 3)
  {
    alert("Anna kunnon nimi! Pidempi kuin 3 merkkiä!");
    lomake.nimi.focus();
    return (false);
  }
  if(emailIsValid(sahkoposti))
  {
    //
  }
  else{
    alert("Anna oikea sähköpostiosoitteesi");
    lomake.email.focus();
    return (false);
  }
  if(ika < minimi || ika > maksimi)
  {
    alert("Et ole sopivan ikäinen tälle kurssille, muuta ikäsi!")
    lomake.ika.focus();
    return (false);
  }
  /* Select-valuen tarkastaminen */
  if (valinta1 != "") {
    // value is set to a valid option, so submit form
  }
  else {
    alert("Sinun täytyy valita, mihin ryhmään kuulut");
    return (false);
    lomake.ryhma.focus();
  }
  /*Radio-painikkeiden tarkistus*/
    var intVastaus=-1;
    for (var i=0; i < lomake.suosittelu.length;i++) {
      if (lomake.suosittelu[i].checked==true) {
      intVastaus=i;
      }
    }
    /*Huomautus, jos radio-painikkeita ei ole valittu*/
    if(intVastaus==-1){
    alert("Sinun täytyy valita suosittelukohdasta jokin vaihtoehto");
    return (false);
    }
    /*Checkboxien tarkistus */
    if(lomake.ammatti.checked == true || lomake.yto.checked == true || lomake.ruoka.checked == true)
    {
      //
    }
    else {
      alert("Sinun täytyy valita mikä on parasta Keudassa");
      return (false);
    }
    /* Select-valuen tarkastaminen */
    if (valinta2 != "") {
      // value is set to a valid option, so submit form
    }
    else {
      alert("Sinun täytyy valita, mihin lempiaineesi Keudassa");
      lomake.mika_attribuutti.focus();
      return (false);
    }
    if(kehitys.length < 10)
    {
      alert("Anna kunnon kehitysehdotus!");
      lomake.nimi.focus();
      return (false);
    }


}
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
