function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "images/list.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "images/x.svg";
  }
}

var el = document.querySelector("#text");
var text = "SÉRGIO KOERICH"
var interval = 200;
function showtext(el, text, interval) {
  var char = text.split("").reverse();
  
  var typer = setInterval(function() {
  
    if (!char.length) {
        return clearInterval(typer)
    }
    
    var next = char.pop();
    
    el.innerHTML += next;
    
  }, interval);
  
}
showtext(el, text, interval);
