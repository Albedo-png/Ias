const stars = document.getElementById("stars");
const music = document.getElementById("music");

// Estrelas
for (let i = 0; i < 180; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  star.style.opacity = (Math.random() * .65 + .15).toFixed(2);
  stars.appendChild(star);
}

// Brilho que acompanha o dedo/mouse
const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Entrada
document.getElementById("enterBtn").addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("experience").classList.remove("hidden");

  // Se você adicionar musica.mp3 ao projeto, ela começa aqui.
  if (music.querySelector("source")) {
    music.volume = 0.45;
    music.play().catch(() => {});
  }

  document.getElementById("universe").scrollIntoView({ behavior: "smooth" });
});

// Modais
document.querySelectorAll(".planet").forEach(planet => {
  planet.addEventListener("click", () => {
    document.getElementById(planet.dataset.modal).classList.add("open");
  });
});

document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => btn.closest(".modal").classList.remove("open"));
});

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("open");
  });
});

// Jardim
document.getElementById("gardenBtn").addEventListener("click", () => {
  document.getElementById("gardenIntro").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => document.getElementById("garden").scrollIntoView({ behavior: "smooth" }), 500);
});

const flowerMessages = [
  {
    title: "Seu sorriso",
    icon: "♡",
    message: "Eu amo o seu sorriso. É uma daquelas coisas que conseguem mudar completamente o clima de um momento. Quando você sorri perto de mim, parece que todo o resto perde um pouco da importância.",
    type: "rose"
  },
  {
    title: "Seus olhos",
    icon: "✦",
    message: "Eu gosto muito dos seus olhos. Acho bonito o jeito que eles conseguem entregar o que você está pensando, mesmo quando você não fala nada. Às vezes eu só quero ficar olhando para você.",
    type: "lilac"
  },
  {
    title: "Seu jeitinho nerd",
    icon: "⌁",
    message: "Eu amo essa sua versão nerd. Pokémon, JoJo, RPG, Undertale... você falando das coisas que gosta é uma das coisas que eu mais gosto de ouvir. Acho muito bonito ver você toda empolgada com algo.",
    type: "blue"
  },
  {
    title: "Seu coração",
    icon: "♡",
    message: "Uma das coisas que mais admiro em você é o jeito que você percebe os outros. Você repara nos pequenos detalhes, tenta entender o que as pessoas sentem e se coloca no lugar delas. Seu coração é uma das coisas mais bonitas em você.",
    type: "white"
  },
  {
    title: "Aquele cheiro",
    icon: "❀",
    message: "Seu cheiro doce é uma dessas coisas que ficam comigo depois que você vai embora. É engraçado como uma coisa tão simples consegue fazer a saudade aparecer ainda mais rápido.",
    type: "peach"
  },
  {
    title: "Suas pequenas manias",
    icon: "☾",
    message: "Eu gosto quando você me morde, quando me imita fazendo 'mimimimi', quando me dá beijinhos e quando fala 'te amo'. São pequenas coisas, mas são justamente essas pequenas coisas que fazem você ser você para mim.",
    type: "pink"
  },
  {
    title: "Nossa bagunça",
    icon: "☻",
    message: "E existe o nosso humor completamente sem sentido. Inclusive aquele assunto que só nós dois entendemos: assediar idoso. Não deveria ser engraçado. Mas de algum jeito virou uma coisa nossa — e eu amo ter coisas que só fazem sentido para nós.",
    type: "gold"
  },
  {
    title: "Quando estou com você",
    icon: "∞",
    message: "Quando estou com você, tudo fica mais vivo. Mais leve, mais feliz, mais colorido. Até ficar sentado em um banquinho de praça por horas, abraçado com você e conversando sobre qualquer coisa, vira um dos meus lugares favoritos do mundo.",
    type: "violet"
  }
];

const flowers = document.getElementById("flowers");
const flowerModal = document.getElementById("flowerModal");
const flowerModalClose = document.getElementById("flowerModalClose");
const flowerModalIcon = document.getElementById("flowerModalIcon");
const flowerModalTitle = document.getElementById("flowerModalTitle");
const flowerModalMessage = document.getElementById("flowerModalMessage");

const flowerPositions = [
  [8, 57], [21, 72], [34, 58], [47, 75],
  [60, 60], [73, 72], [86, 56], [94, 73]
];

function openFlower(message) {
  flowerModalIcon.textContent = message.icon;
  flowerModalTitle.textContent = message.title;
  flowerModalMessage.textContent = message.message;
  flowerModal.classList.add("open");
  flowerModal.setAttribute("aria-hidden", "false");
}

function closeFlower() {
  flowerModal.classList.remove("open");
  flowerModal.setAttribute("aria-hidden", "true");
}

flowerMessages.forEach((item, i) => {
  const flower = document.createElement("button");
  flower.className = `flower flower-${item.type}`;
  flower.setAttribute("aria-label", item.title);
  flower.innerHTML = `
    <span class="flower-halo"></span>
    <span class="petals">
      <i></i><i></i><i></i><i></i><i></i>
    </span>
    <span class="flower-center"></span>
    <span class="stem"></span>
    <span class="leaf leaf-left"></span>
    <span class="leaf leaf-right"></span>
  `;

  const [left, bottom] = flowerPositions[i];
  flower.style.left = left + "%";
  flower.style.bottom = bottom + "px";
  flower.style.animationDelay = (i * .28) + "s";

  flower.addEventListener("click", () => openFlower(item));
  flowers.appendChild(flower);
});

flowerModalClose.addEventListener("click", closeFlower);

flowerModal.addEventListener("click", e => {
  if (e.target === flowerModal) closeFlower();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeFlower();
});

// Final
document.getElementById("finalBtn").addEventListener("click", () => {
  document.getElementById("finale").scrollIntoView({ behavior: "smooth" });
});

function sayYes() {
  document.getElementById("answers").classList.add("hidden");
  document.getElementById("finalQuestion").classList.add("hidden");
  document.querySelector(".final-text").classList.add("hidden");
  document.getElementById("success").classList.remove("hidden");
  makeConfetti();
}

document.getElementById("yesBtn").addEventListener("click", sayYes);
document.getElementById("ofCourseBtn").addEventListener("click", sayYes);

function makeConfetti() {
  for (let i = 0; i < 70; i++) {
    const c = document.createElement("span");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-10px";
    c.style.setProperty("--x", ((Math.random() - .5) * 350) + "px");
    c.style.animationDelay = Math.random() * .8 + "s";
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3200);
  }
}


/* Guarda a data e a hora exatas em que ela clicou em uma resposta positiva.
   O horário é o do dispositivo/navegador dela. */
(function setupAnswerMemory() {
  const stamp = document.getElementById("answerStamp");
  const dateTime = document.getElementById("answerDateTime");
  if (!stamp || !dateTime) return;

  const positiveSelectors = [
    "#yesBtn",
    "#simBtn",
    "#clearBtn",
    "#claroBtn",
    "[data-answer='yes']",
    "[data-answer='sim']",
    ".yes-btn",
    ".sim-btn",
    ".answer-yes"
  ];

  const buttons = positiveSelectors.flatMap(sel => [...document.querySelectorAll(sel)]);
  if (!buttons.length) return;

  function showAnswerMoment() {
    const now = new Date();

    const formatted = new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "full",
      timeStyle: "medium"
    }).format(now);

    dateTime.textContent = formatted;
    stamp.hidden = false;

    // Também guarda no navegador, para a lembrança continuar aparecendo
    // se ela recarregar a página no mesmo dispositivo.
    try {
      localStorage.setItem("iasmin_answer_moment", now.toISOString());
    } catch (_) {}
  }

  buttons.forEach(button => {
    button.addEventListener("click", showAnswerMoment);
  });

  // Se ela já respondeu anteriormente neste dispositivo, recupera o momento.
  try {
    const saved = localStorage.getItem("iasmin_answer_moment");
    if (saved) {
      const savedDate = new Date(saved);
      if (!Number.isNaN(savedDate.getTime())) {
        dateTime.textContent = new Intl.DateTimeFormat("pt-BR", {
          dateStyle: "full",
          timeStyle: "medium"
        }).format(savedDate);
        stamp.hidden = false;
      }
    }
  } catch (_) {}
})();

/* Música: Lisboa — ANAVITÓRIA & Lenine */
(function setupMusic() {
  const audio = document.getElementById("siteMusic");
  const toggle = document.getElementById("musicToggle");
  const icon = document.getElementById("musicIcon");
  if (!audio || !toggle) return;

  function updateButton() {
    const playing = !audio.paused;
    toggle.classList.toggle("playing", playing);
    toggle.setAttribute("aria-label", playing ? "Pausar música" : "Tocar música");
    if (icon) icon.textContent = playing ? "Ⅱ" : "♫";
  }

  toggle.addEventListener("click", async (event) => {
    event.stopPropagation();
    if (audio.paused) {
      try { await audio.play(); } catch (_) {}
    } else {
      audio.pause();
    }
    updateButton();
  });

  audio.addEventListener("play", updateButton);
  audio.addEventListener("pause", updateButton);

  // O navegador pode bloquear autoplay; a primeira interação da visitante
  // tenta iniciar a música e o botão continua disponível caso seja bloqueado.
  const firstInteraction = async () => {
    if (audio.paused) {
      try { await audio.play(); } catch (_) {}
    }
    updateButton();
  };

  document.addEventListener("click", firstInteraction, { once: true });
  document.addEventListener("touchstart", firstInteraction, { once: true });
})();
