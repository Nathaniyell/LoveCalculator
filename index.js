let random = Math.floor(Math.random() * 100);
let button = document.getElementById('button')
let message = document.getElementById('result');
let first = document.getElementById("spouseA");
let second = document.getElementById("spouseB");
button.addEventListener('click', () => {
  if (random <= 10 || random <= 44) {
    return message.innerHTML = `${random}% Match. ${first.value}, You go soon chop breakfast`;
  } else if (random >= 45 && random <= 60) {
    return message.innerHTML = `${random}% Match. \n Una de try`;
  } else {
    return message.innerHTML = `${random}% Match. \n ${first.value} and ${second.value} were made for each other!!`;
  };
})