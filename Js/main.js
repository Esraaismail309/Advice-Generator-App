const URL = "https://api.adviceslip.com/advice";
const adviceBody = document.getElementById("adviceBody");
const adviceId = document.getElementById("adviceId");
const adviceBtn = document.getElementById("adviceBtn");

onload(getAdvice());
// adviceBtn.addEventListener("click", getAdvice);

function getAdvice() {
  fetch(URL).then((response) => {
    return response
      .json()
      .then((data) => {
        let advice = data.slip;
        adviceId.innerHTML = `ADVICE # ${advice.id}`;
        adviceBody.innerHTML = `${advice.advice}`;
      })
      .catch((error) => {
        return console.log(error);
      });
  });
}
