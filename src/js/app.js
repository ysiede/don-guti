console.log("on");

/* a11ty Menu navegacion */ 
// https://gui-challenges.web.app/sidenav/dist/

const sidenav = document.querySelector('#sidenav-open')
const closenav = document.querySelector('#sidenav-close')
const opennav = document.querySelector('#sidenav-button')

// set focus to our open/close buttons after animation
sidenav.addEventListener('transitionend', e => {
  if (e.propertyName !== 'transform')
    return

  const isOpen = document.location.hash === '#sidenav-open'

  // user este para navegación fuera de la página
/*
  isOpen
    ? closenav.focus()
    : opennav.focus()
*/

// usar este para navegación por secciones
if(isOpen) {
  closenav.focus()
}

  if (!isOpen) {
    history.replaceState(history.state, '')
  }
})

// close our menu when esc is pressed
sidenav.addEventListener('keyup', e => {
  if (e.code === 'Escape')
    window.history.length
      ? window.history.back()
      : document.location.hash = ''
})

/** */

// copyright
const copyright = document.querySelector("#copyright");
let year = new Date().getFullYear();
let empresa =  'Taller Don Guti';
copyright.innerHTML = `&copy; Copyright ${year}, ${empresa}`;

/** */

// lazy load bg image
// false -> no cargar imagen

const lazy = true;

if(lazy) {
  document.addEventListener("DOMContentLoaded", function() {
    let lazyBackgrounds = [].slice.call(document.querySelectorAll(".hero"));
  
    if ("IntersectionObserver" in window) {
      let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            lazyBackgroundObserver.unobserve(entry.target);
          }
        });
      });
  
      lazyBackgrounds.forEach(function(lazyBackground) {
        lazyBackgroundObserver.observe(lazyBackground);
      });
    }
  });
}


