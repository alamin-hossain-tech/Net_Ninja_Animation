const text = document.querySelector('.text p');
console.log(text);
text.innerHTML = text.innerText
  .split('')
  .map(
    (char, i) => `<span style="transform:rotate(${i * 3}deg)">${char}</span>`
  )
  .join('');
