const button = document.querySelectorAll('button')[1];
const container = document.querySelector('.container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = randomColor();
    e.stopPropagation();
})

container.addEventListener('click', function(){
    container.style.display = "none";
})

const randomColor = () => {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;

  return `rgb(${r},${g},${b})`;
};
