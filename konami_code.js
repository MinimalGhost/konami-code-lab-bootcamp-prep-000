const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {
  document.body.addEventListener('keydown', function(event) {
    onKeyDownHandler(event);
  });
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert('Konami code successful!');
    }
  } else {
    index = 0;
  }
}
