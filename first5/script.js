document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("secondinput");
  const btn = document.getElementById("startButton");
  const countdownDisplay = document.getElementById("countdown");
  const messageDisplay = document.getElementById("message");
  let countdown;

  btn.addEventListener("click", () => {
      clearInterval(countdown);
      const seconds = parseInt(input.value);
      if (isNaN(seconds) || seconds <= 0) {
          alert("Please enter a valid number of seconds.");
          return;
      }
      messageDisplay.style.display = "none";
      startCountdown(seconds);
  });

  function startCountdown(seconds) {
      const endTime = Date.now() + seconds * 1000;
      countdown = setInterval(() => {
          const remainingTime = Math.round((endTime - Date.now()) / 1000);
          if (remainingTime <= 0) {
              clearInterval(countdown);
              countdownDisplay.textContent = "0";
              messageDisplay.style.display = "block";
          } else {
              countdownDisplay.textContent = remainingTime;
          }
      }, 1000);
  }
});