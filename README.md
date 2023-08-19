# Stopwatch

![](https://img.shields.io/badge/Project_Status-Complete-green.svg) ![](https://img.shields.io/badge/Built_with-JavaScript-F0DB4F.svg)

> This is a basic stopwatch app.
> You can start, stop, continue and reset the timer.

<!-- > Live demo on [_GitHub Pages_](https://pages.github.com/). -->

![Example screenshot](./img/screenshot-small.PNG)

## Table of Contents

- [Technologies & Concepts](#technologies-concepts)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Technologies & Concepts

### HTML

- link [Font Awesome](https://fontawesome.com/) stylesheet via [CDN](https://cdnjs.com/libraries/font-awesome)

### CSS

- @import [Google Fonts](https://fonts.google.com/)
- [Center a Div Vertically](https://www.delftstack.com/howto/css/center-a-div-vertically/#use-the-css-flexbox-to-vertically-center-the-div-in-css)
- Sticky Footer:

  ```css
  main {
    min-height: calc(100vh - 60px);
  }

  footer {
    height: 60px;
  }
  ```

### JavaScript

- [Timing Events](https://www.w3schools.com/js/js_timing.asp) `setInterval()` and `clearInterval()`

  ```javascript
  let interval;

  // setInterval()
  interval = setInterval(countTime, 10);

  // clearInterval()
  clearInterval(interval);
  ```

- [onclick Event](https://www.w3schools.com/jsref/event_onclick.asp) `onclick `

## Acknowledgements

- This project was based on [24 JavaScript Projects You Can Build to Perfect Your Coding Skills](https://mikkegoes.com/javascript-projects-for-beginners/). Thank you Mikke!

## Contact

Created by [@Thomas Ulrich](https://github.com/TomUlrich) - feel free to contact me!
