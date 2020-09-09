function lahetys()
{
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
}
