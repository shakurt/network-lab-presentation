import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';

// Import Reveal.js core styles
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
// Import code syntax highlighting style
import 'reveal.js/plugin/highlight/monokai.css';

// Initialize Reveal.js
const deck = new Reveal({
  hash: true,
  center: true,
  width: 1280,
  height: 720,
  margin: 0.08,
  minScale: 0.2,
  maxScale: 2.0,
  transition: 'slide', // slide, fade, convex, concave, zoom
  transitionSpeed: 'normal',
  plugins: [RevealHighlight],
  keyboard: true,
  touch: true,
  controls: true,
  progress: true,
  slideNumber: 'c/t',
  backgroundTransition: 'fade'
});

deck.initialize();
