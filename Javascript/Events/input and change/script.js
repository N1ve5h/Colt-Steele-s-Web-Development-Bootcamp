const input = document.querySelector('input');
const h1 = document.querySelector('h1');

//console log when the user leaves
// input.addEventListener("change", function (e) {
//   console.log(input.value);
// });


//h1 chaanges with every input
input.addEventListener('input', function(e){
    h1.innerText = input.value;
})