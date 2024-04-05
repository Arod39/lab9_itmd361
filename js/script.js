function init(){
 var button1 = document.getElementById('entrybutton');
 var usertext = document.getElementById('entryinput');
 
 function showtext() {
  document.getElementById('textoutput').innerHTML = usertext.value;
  alert("Andrew Rodriguez: " + usertext.value);
 }
 
 button1.addEventListener('click', showtext);
}
window.addEventListener('load', init);
