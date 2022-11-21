import data from "./data.json" assert { type: "json" };

console.log(data);

let dailyArray = data.map((element) => element.timeframes.daily);
let weeklyArray = data.map((element) => element.timeframes.weekly);
let monthlyArray = data.map((element) => element.timeframes.monthly);
let arrayColor = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

const dailyBtn = document.querySelector("#daily")
const weeklyBtn = document.querySelector("#weekly")
const monthlyBtn = document.querySelector("#monthly")
const active = document.querySelector('.active')
const segundoSection = document.querySelector(".second-section");

mostrarElementos(dailyArray);

dailyBtn.addEventListener("click", (elemento) => { 
  document.querySelector('.active').classList.remove('active')
  document.querySelector('#daily').classList.add('active')
  
  mostrarElementos(dailyArray);
});

weeklyBtn.addEventListener("click", () => {
  document.querySelector('.active').classList.remove('active')
  document.querySelector('#weekly').classList.add('active')
  mostrarElementos(weeklyArray);
});

monthlyBtn.addEventListener("click", () => {
  document.querySelector('.active').classList.remove('active')
  document.querySelector('#monthly').classList.add('active')
  mostrarElementos(monthlyArray);
});

function mostrarElementos(array) {
  segundoSection.innerHTML = "";

  array.forEach((datos, indice) => {
    let title = data[indice].title;
    let titleMinusculas = title.toLocaleLowerCase();

    if (titleMinusculas == "self care") {
      titleMinusculas = "self-care";
    }
    segundoSection.innerHTML += ` 
        <div class="card">
        <div class="card__background" style="background-color: ${arrayColor[indice]}">
          <img class="card__image" src="./images/icon-${titleMinusculas}.svg" alt="work" />
        </div>

        <div class="main__details">
          <div class="main__activity">
            <p class="main_title">${title}</p>
            <img class="main__puntos" src="./images/icon-ellipsis.svg" alt="puntos" />
          </div>
          <div class="card__inferior">
            <p class="card__hours">${datos.current} hrs</p>
            <p class="card__previous">Last week - ${datos.previous}hrs</p>
          </div>
        </div>
      </div>`;
    console.log(datos);
  });
}
