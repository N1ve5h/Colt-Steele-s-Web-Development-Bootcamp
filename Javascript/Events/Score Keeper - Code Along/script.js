const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
};

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
};

const resetButton = document.querySelector("#reset");
const playToSelect = document.querySelector('#playTo');

let winScore = 3;
let isGameOver = false;

function updateScore (player, opponent) {
    if (!isGameOver) {
    player.score += 1;
    if (player.score === winScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.display.disabled = true;
      opponent.display.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
    updateScore(p1,p2);
});

p2.button.addEventListener("click", function () {
    updateScore(p2,p1);
});

playToSelect.addEventListener("change", function () {
  winScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;

    for (let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.display = false;
    }
}


