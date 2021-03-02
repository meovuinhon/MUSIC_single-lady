// jshint esversion: 9
for (let [i, e] of document.querySelectorAll(".music-notes ul li").entries()) 
  e.setAttribute('style', 'animation: music 1s ' + i * 5 + '00ms  ease-in-out both infinite');