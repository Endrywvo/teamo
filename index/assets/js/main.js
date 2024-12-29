/* dias */
var countDownDate = new Date("jul 5, 2030 15:37:25").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
  // Output the result in an element with id="demo"
  document.getElementById("dia").innerHTML = days + "d ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dia").innerHTML = "EXPIRED";
  }
}, 1000);

/* horas */

var countDownDate = new Date("jul 5, 2030 15:37:25").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
  // Output the result in an element with id="demo"
  document.getElementById("hora").innerHTML = hours + "h ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hora").innerHTML = "EXPIRED";
  }
}, 1000);

/* minutos */

var countDownDate = new Date("jul 5, 2030 15:37:25").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
  // Output the result in an element with id="demo"
  document.getElementById("minuto").innerHTML = minutes + "m ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("minuto").innerHTML = "EXPIRED";
  }
}, 1000);

/* segundos */

var countDownDate = new Date("jul 5, 2030 15:37:25").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("segundo").innerHTML =seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("segundo").innerHTML = "EXPIRED";
  }
}, 1000);






