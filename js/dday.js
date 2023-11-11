const clockTitle = document.querySelector(".js-clock");

function xMasCal() {
  const today = new Date();
  const thisYear = today.getFullYear();
  const dDay = new Date(`${thisYear}-12-25`);
  const untilChirsmas = new Date(dDay - today);
  const dDayDay = String(
    Math.floor(untilChirsmas / (1000 * 60 * 60 * 24))
  ).padStart(2, "0");
  const dDayHour = String(
    Math.floor(untilChirsmas / (1000 * 60 * 60)) % 24
  ).padStart(2, "0");
  const dDayMin = String(Math.floor(untilChirsmas / (1000 * 60)) % 24).padStart(
    2,
    "0"
  );
  const dDaySecond = String(Math.floor(untilChirsmas / 1000) % 60).padStart(
    2,
    "0"
  );
  clockTitle.innerText = `크리스마스까지 ${dDayDay}일 ${dDayHour}시간 ${dDayMin}분 ${dDaySecond}초 🎄🤶🏻`;
}

setInterval(xMasCal, 1000);
