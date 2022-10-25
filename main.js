var link = document.querySelector('.link');
var hms = document.querySelector('.hms');

function fun() {

  var t2 = `${link.value}?t=${hms.value}`;

  document.querySelector('.result').value = t2;
}
