const startDate = new Date("2021-11-25T00:00:00"); // Altere para a data real
const timeDisplay = document.getElementById("timeTogether");

function updateTime() {
  const now = new Date();

  let anos = now.getFullYear() - startDate.getFullYear();
  let meses = now.getMonth() - startDate.getMonth();
  let dias = now.getDate() - startDate.getDate();

  if (dias < 0) {
    // pega dias do mês anterior
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    dias += previousMonth.getDate();
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anos--;
  }

  // Tratamento para plural/singular
  const texto = `${anos} ano${anos !== 1 ? "s" : ""}, ${meses} mes${meses !== 1 ? "es" : ""} e ${dias} dia${dias !== 1 ? "s" : ""}`;
  timeDisplay.textContent = texto;
}

updateTime();
setInterval(updateTime, 60 * 1000);

// Slideshow
const photos = [
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg",
"photo7.jpg",
"photo8.jpg",
"photo9.jpg",
"photo10.jpg",
"photo11.jpg",
"photo12.jpg",
"photo13.jpg",
"photo14.jpg",
"photo15.jpg",
"photo16.jpg",
"photo17.jpg",
"photo18.jpg",
"photo19.jpg",
"photo20.jpg",
"photo21.jpg",
"photo22.jpg",
"photo23.jpg",
"photo24.jpg",
"photo25.jpg",
"photo26.jpg",
"photo27.jpg",
"photo28.jpg",
"photo29.jpg",
"photo30.jpg",
"photo31.jpg",
"photo32.jpg",
"photo33.jpg",
"photo34.jpg",
"photo35.jpg",
"photo36.jpg",
"photo37.jpg",
"photo38.jpg",
"photo39.jpg",
"photo40.jpg",
"photo41.jpg",
"photo42.jpg",
"photo43.jpg",
"photo44.jpg",
"photo45.jpg",
"photo46.jpg",
"photo47.jpg",
"photo48.jpg",
"photo49.jpg",
"photo50.jpg",
"photo51.jpg",
"photo52.jpg",
"photo53.jpg",
"photo54.jpg",
"photo55.jpg",
"photo56.jpg",
"photo57.jpg",
"photo58.jpg",
"photo59.jpg",
"photo60.jpg",
"photo61.jpg",
"photo62.jpg",

];

let current = 0;
const img = document.getElementById("photo");

setInterval(() => {
  current = (current + 1) % photos.length;
  img.src = `photos/${photos[current]}`;
}, 4000); // troca a cada 4 segundos
