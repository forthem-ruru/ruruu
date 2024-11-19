const openCardImg = document.querySelectorAll(".card .show");
const closeCardImg = document.querySelectorAll(".card .hide");
const star = document.querySelector(".star img");
const cards = document.querySelectorAll(".card");
const cardImgs = document.querySelectorAll(".card-img");
const mrgn = screen.height / 3.5;

const audio = document.getElementById("background-audio");
const playMusicButton = document.getElementById("play-button");

// Play and unmute audio when the "Play Music" button is clicked
playMusicButton.addEventListener("click", () => {
  if (audio.paused) {
    audio
      .play()
      .then(() => {
        audio.muted = false; // Unmute the audio
      })
      .catch((error) => {
        console.log("Autoplay failed:", error);
      });
  }
});

function scrollToJustAbove(element, margin = mrgn) {
  let ToTop = window.pageYOffset + element.getBoundingClientRect().top;
  window.scrollTo(window.scrollX, ToTop - margin);
}

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

openCardImg.forEach((img) => {
  img &&
    img.addEventListener("click", (e) => {
      cards.forEach((card) => card.classList.remove("active"));
      img.closest(".card").classList.add("active");
    });
});

closeCardImg.forEach((img) => {
  img &&
    img.addEventListener("click", (e) => {
      img.closest(".card").classList.remove("active");
    });
});

cards.forEach((card) => {
  if (card && window.innerWidth < 1024) {
    card.addEventListener("click", (e) => {
      cards.forEach((card) => card.classList.remove("active"));
      if (
        e.target.classList.contains("card") ||
        e.target.classList.contains("show")
      ) {
        card.classList.add("active");
      }
      if (e.target.classList.contains("desc")) {
        card.classList.remove("active");
      }
    });
  }
});

star &&
  star.addEventListener("click", (e) => {
    const random = Math.floor(Math.random() * cards.length);
    const cardrand = cards[random];

    cards.forEach((card) => card.classList.remove("active"));
    cardrand && (cardrand.classList.add("active"), scrollToJustAbove(cardrand));
  });
