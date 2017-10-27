const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const input = document.getElementsByTagName('body');
let index = 0;


function init() {
  input.addEventListener('keydown', function(e) {
    while (index < code.length) {
      if (e.which || e.detail === code[index]) {
        index++;
      } else {
        index = 0;
      }
    }
  });
}
