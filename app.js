const SQUARES_NUMBER = 500;
const colors = ['red', 'blue', 'orange', 'green', 'yellow', 'purple'];

const board = document.querySelector('#board');

const getRandomColor = () => {
  const i = Math.floor(Math.random() * colors.length);
  return colors[i];
};
const setColor = (element) => {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};
const removeColor = (element) => {
  element.style.background = '#e8e8e8';
  element.style.boxShadow = `0 0 2px #000`;
};

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => 
    setColor(square)
  );
  square.addEventListener('mouseleave', () => 
    removeColor(square)
  );

  board.append(square);
}