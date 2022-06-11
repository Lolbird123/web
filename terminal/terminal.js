let input = document.getElementById('input');
let output = document.getElementById('output');

function log(text) {
	let p = document.createElement('p');
  let br = document.createElement('br');
  p.innerHTML = text;
  output.append(p, br);
  p.scrollIntoView();
}

input.addEventListener('keydown', function(event) {
	if(event.keyCode === 13) {
  	let text = input.value;
    input.value = '';
    log(text);
  }
}, false);
