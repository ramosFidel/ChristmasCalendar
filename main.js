document.querySelector('.day-1').addEventListener('click', function() {
  confetti();
});

document.querySelector('.day-2').addEventListener('click', function() {
  const audio = document.getElementById("audio");
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0; 
  }, 8000);
});
document.querySelector('.day-3').addEventListener('click', function() {
});
document.querySelector('.day-4').addEventListener('click', function() {
});

document.querySelector('.day-5').addEventListener('click', function() {
});
document.querySelector('.day-6').addEventListener('click', function() {
});
document.querySelector('.day-7').addEventListener('click', function() {
});
document.querySelector('.day-8').addEventListener('click', function() {
});
document.querySelector('.day-9').addEventListener('click', function() {
});
document.querySelector('.day-10').addEventListener('click', function() {
});
document.querySelector('.day-11').addEventListener('click', function() {
});
document.querySelector('.day-12').addEventListener('click', function() {
});
document.querySelector('.day-13').addEventListener('click', function() {
});
document.querySelector('.day-14').addEventListener('click', function() {
});
document.querySelector('.day-15').addEventListener('click', function() {
});
document.querySelector('.day-16').addEventListener('click', function() {
} );



document.querySelector('.day-17').addEventListener('click', function() {
  const duration = 5000; 
  const interval = 50;   
  
  let starsInterval = setInterval(function() {
    stars();
  }, interval);
  
  setTimeout(function() {
    clearInterval(starsInterval);
  }, duration);
});
document.querySelector('.day-18').addEventListener('click', function() {
} );
document.querySelector('.day-19').addEventListener('click', function() {
}); 

document.querySelector('.day-20').addEventListener('click', function() {
}); 
document.querySelector('.day-21').addEventListener('click', function() {
}); 
document.querySelector('.day-22').addEventListener('click', function() {
});
document.querySelector('.day-23').addEventListener('click', function() {
});
document.querySelector('.day-24').addEventListener('click', function() {
});
function stars() {
  let e = document.createElement("div");
  e.setAttribute("class", "star");
  document.body.appendChild(e);
  e.style.left = Math.random() * innerWidth + "px";  // Posición horizontal aleatoria

  let size = Math.random() * 12;
  let duration = Math.random() * 3;

  e.style.fontSize = 12 + "px"; // Tamaño fijo para las estrellas
  e.style.animationDuration = 2 + duration + "s"; // Duración aleatoria para la animación de cada estrella

  // Elimina la estrella después de 5 segundos
  setTimeout(function() {
    document.body.removeChild(e);
  }, 5000);
}