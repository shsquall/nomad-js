const clock = document.querySelector("h2#clock");
clock.style.cssText = "text-shadow: #33749D 0px 0px 20px, #33749D 0px 0px 30px, blue 0px 0px 40px, #33749D 0px 0px 50px, #33749D 0px 0px 75px, 2px 2px 2px rgba(206,89,55,0)"

function getclock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getclock();
setInterval(getclock, 1000);
