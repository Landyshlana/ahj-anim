const container = document.querySelector('.container');
const text = document.querySelector('.text-container');

const btn = document.querySelector('.btn');

container.addEventListener('mouseover', () => {container.classList.add('hidden'); });
container.addEventListener('mouseout', () => {container.classList.remove('hidden'); });

btn.addEventListener('click', () => { container.classList.remove('hidden'); });
btn.addEventListener('click', () => { text.classList.toggle('animat'); });
