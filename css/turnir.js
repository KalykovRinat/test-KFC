
const filterButtons = document.querySelectorAll('.game-filter button');
const cards = document.querySelectorAll('.tournament-card');

filterButtons.forEach(button => {
button.addEventListener('click', () => {
    const game = button.dataset.game;

    // активная кнопка
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // фильтрация
    cards.forEach(card => {
    if (game === "all" || card.dataset.game === game) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
    });
});
});

function filterTournaments(game) {
  const cards = document.querySelectorAll(".tournament-card");
  cards.forEach(card => {
    const isMatch = game === "all" || card.dataset.game === game;
    card.style.display = isMatch ? "block" : "none";
  });
}
function showTab(tab) {
  document.querySelectorAll(".rating-table").forEach(el => {
    el.classList.remove("active");
  });
  document.getElementById(tab).classList.add("active");
}

