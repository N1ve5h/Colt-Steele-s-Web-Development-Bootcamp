function call10times (func) {

    for (let i = 0; i < 10; i++) {
        func()
    }
}

function rollDie() {
   const roll = Math.floor(Math.random()*6 ) +1;
   console.log(roll);
}

call10times(rollDie);