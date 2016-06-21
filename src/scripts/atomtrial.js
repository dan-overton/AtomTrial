var secs = document.getElementById("secs");

setInterval(function() {
  secs.innerText = Number(secs.innerText) + 1;
}, 1000);
