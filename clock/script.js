const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");

let intervalId;

const updateClock = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDegree = (hours % 12) * 30 + (minutes / 60) * 30;
  const minuteDegree = minutes * 6 + (seconds / 60) * 6;
  const secondDegree = seconds * 6;

  if (hourHand)
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDegree}deg)`;
  if (minuteHand)
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDegree}deg)`;
  if (secondHand)
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDegree}deg)`;
};

document.addEventListener("DOMContentLoaded", () => {
  intervalId = setInterval(updateClock, 1000);
  updateClock();
});

window.addEventListener("beforeunload", () => {
  clearInterval(intervalId); // 清除定时器
});
