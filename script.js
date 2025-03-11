function clickYesButton() {
    alert("ooo Fanchol jon migirad🥰 (^_^) 《< Narges jooonam... jon gereftam>》🤩");
  }

  function hoverNoButton() {
    const noButton = document.getElementById('no-button');
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
  }