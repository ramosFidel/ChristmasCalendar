document.querySelector('.day-1').addEventListener('click', function() {
  const count = 200,
  defaults = {
    origin: { y: 0.48, x: 0.55 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
});



document.getElementById("musicRene").addEventListener("change", function () {
  const audio = document.getElementById("audio");
  if (this.checked) {
    audio.play();
  } else {
    audio.pause();
  }
});
document.getElementById("musicToggle").addEventListener("change", function () {
  const music = document.getElementById("music");

  if (this.checked) {
    music.play();
  } else {
    music.pause();
  }
});
document.querySelector('.day-4').addEventListener('click', function() {
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    origin: { y: 0.58, x: 0.75 },
  };
  
  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });
  
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }
  
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
});

document.querySelector('.day-5').addEventListener('click', function() {
});
document.querySelector('.day-6').addEventListener('click', function() {
  const duration = 5 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 20, spread: 200, ticks: 40, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 30 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({
      ...defaults,
    particleCount: 10,
    scalar: 2,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["❄️"],
      },
    },
    }, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({
      ...defaults,
    particleCount: 10,
    scalar: 2,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["❄️"],
      }
    },
    }, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 200);



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
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    origin: { y: 0.58, x: 0.35 },
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };
  
  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });
  
  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });
  
  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });
}); 
document.querySelector('.day-22').addEventListener('click', function() {
});
document.querySelector('.day-23').addEventListener('click', function() {
});
document.querySelector('.day-24').addEventListener('click', function() {
  const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
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