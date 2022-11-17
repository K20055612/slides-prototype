import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

const editor = document.getElementById("editor");
const slides = document.getElementsByClassName("slides")[0];

function keyPress(e) {
  if(e.keyCode == 83 && e.ctrlKey) {
    e.preventDefault();
    let text = editor.value;
    deck.destroy();
    slides.innerHTML = '<section data-markdown><textarea data-template id="code"></textarea></section>';
    let code = document.getElementById("code");
    code.textContent = text;
    console.log(code);
    deck.initialize();
  }
}

document.onkeydown = keyPress;

let deck = new Reveal( document.querySelector( '.reveal' ), {
  plugins: [ Markdown ],
  embedded: true,
  keyboardCondition: 'focused' 
} );

deck.initialize();