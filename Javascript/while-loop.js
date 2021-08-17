// let count = 0;

// while (count < 10){
//     console.log(count)
//     count++;
// }

let input = prompt("Hey say something!")
let condition = true;
while (condition === true) {
    input = prompt(input);
    if (input === "stop copying me") {
        condition = false;
    }
}