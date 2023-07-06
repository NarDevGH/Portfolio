const selectWeb = document.getElementById("select-web");
const selectGames = document.getElementById("select-games");
const webCarousel = document.getElementById("web-carousel");
const gameCarousel = document.getElementById("games-carousel");

function onClickWebOption() {
    if (webCarousel.classList.contains("hidden")) {
        webCarousel.classList.remove("hidden");
        selectWeb.classList.remove("projects-type-unselected");
        gameCarousel.classList.add("hidden");
        selectGames.classList.add("projects-type-unselected");
    }
}
function onClickGamesOption() {
    if (gameCarousel.classList.contains("hidden")) {
        webCarousel.classList.add("hidden");
        selectWeb.classList.add("projects-type-unselected");
        gameCarousel.classList.remove("hidden");
        selectGames.classList.remove("projects-type-unselected");
    }
}

selectWeb.addEventListener("click", onClickWebOption);
selectGames.addEventListener("click", onClickGamesOption);