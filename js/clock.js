function digitalClock () {
  const hours = (new Date().getUTCHours()) + 3;
  const min = (new Date().getUTCMinutes());

  const clock = `${hours} : ${min} GMT+3 Moscow`
  document.getElementById("clock").innerHTML = clock;
  setTimeout("digitalClock()", 1000)
}

digitalClock ()