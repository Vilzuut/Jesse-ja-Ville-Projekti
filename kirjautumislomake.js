function lahetys()
{
var empt = document.inputs["etunimi"]["sukunimi"].value;
if (empt == "")
{
alert("Kirjoita nimesi");
return false;
}
else
{
return true;
}
}
