const button = document.querySelectorAll('.btn');

const handleClick = event => {
  console.log(event.target.textContent);
};
button.forEach(el => el.addEventListener('click', handleClick));
