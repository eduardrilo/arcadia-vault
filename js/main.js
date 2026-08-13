"use strict";

const games = {
  nebula: {
    title: "Nebula Drift",
    genre: "Aventura",
    duration: "6 horas",
    image: "img/nebula-drift.webp",
    alt: "Nave solitaria avanzando entre nebulosas violetas",
    description: "Una expedición íntima hacia el borde de una galaxia que está olvidando sus estrellas.",
    link: "detalle.html"
  },
  afterlight: {
    title: "Afterlight Protocol",
    genre: "Estrategia",
    duration: "12 horas",
    image: "img/afterlight.webp",
    alt: "Ciudad futurista iluminada por un sol naranja",
    description: "Administra siete minutos de energía al día y decide qué parte de la ciudad vuelve a vivir.",
    link: "catalogo.html#afterlight"
  },
  mossbound: {
    title: "Mossbound",
    genre: "Aventura",
    duration: "8 horas",
    image: "img/mossbound.webp",
    alt: "Bosque verde cubriendo ruinas de una civilización antigua",
    description: "El bosque memoriza tus pasos y cambia los senderos cada vez que intentas volver.",
    link: "catalogo.html#mossbound"
  },
  forge: {
    title: "Pixel Forge",
    genre: "Simulación",
    duration: "10 horas",
    image: "img/pixel-forge.webp",
    alt: "Forja fantástica con chispas rojas y metal brillante",
    description: "Forja armas imposibles y conoce las historias de los héroes que vienen a buscarlas.",
    link: "catalogo.html#pixel-forge"
  },
  echo: {
    title: "Echo Line",
    genre: "Puzle",
    duration: "4 horas",
    image: "img/echo-line.webp",
    alt: "Ondas de sonido azules cruzando un túnel oscuro",
    description: "Resuelve espacios que solo existen mientras recuerdas el sonido que los creó.",
    link: "catalogo.html#echo-line"
  },
  tide: {
    title: "Tidekeeper",
    genre: "Simulación",
    duration: "7 horas",
    image: "img/tidekeeper.webp",
    alt: "Faro blanco frente a un océano turquesa y una gran luna",
    description: "Cuida el último faro y negocia con un océano que responde a tu estado de ánimo.",
    link: "catalogo.html#tidekeeper"
  },
  crown: {
    title: "Paper Crown",
    genre: "Estrategia",
    duration: "9 horas",
    image: "img/paper-crown.webp",
    alt: "Corona de papel sobre un mapa político color arena",
    description: "Gobierna un reino dibujado a mano donde cada decreto cambia también el mapa.",
    link: "catalogo.html#paper-crown"
  },
  garden: {
    title: "Loop Garden",
    genre: "Puzle",
    duration: "5 horas",
    image: "img/loop-garden.webp",
    alt: "Jardín geométrico rosado suspendido en el espacio",
    description: "Cultiva plantas que doblan el tiempo y abre caminos usando sus ciclos de crecimiento.",
    link: "catalogo.html#loop-garden"
  }
};

function applyTheme(theme) {
  const root = document.documentElement;
  const button = document.querySelector("#themeToggle");
  const isDark = theme === "dark";

  root.setAttribute("data-bs-theme", isDark ? "dark" : "light");

  if (button) {
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
  }
}

function getStoredTheme() {
  try {
    return window.localStorage.getItem("arcadia-theme");
  } catch (error) {
    return null;
  }
}

function storeTheme(theme) {
  try {
    window.localStorage.setItem("arcadia-theme", theme);
  } catch (error) {
    // El sitio sigue funcionando si el navegador bloquea el almacenamiento local.
  }
}

function initializeThemeToggle() {
  const button = document.querySelector("#themeToggle");
  const preferredTheme = getStoredTheme() || "light";

  applyTheme(preferredTheme);

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    storeTheme(nextTheme);
  });
}

function initializeRandomGame() {
  const button = document.querySelector("#randomGameButton");
  const result = document.querySelector("#randomGameResult");

  if (!button || !result) {
    return;
  }

  button.addEventListener("click", () => {
    const gameList = Object.values(games);
    const selectedGame = gameList[Math.floor(Math.random() * gameList.length)];
    result.innerHTML = `Señal encontrada: <strong>${selectedGame.title}</strong> · ${selectedGame.genre}`;
  });
}

function initializeCatalogFilters() {
  const searchInput = document.querySelector("#gameSearch");
  const genreSelect = document.querySelector("#genreFilter");
  const cards = [...document.querySelectorAll(".game-item")];
  const resultCount = document.querySelector("#resultCount");
  const emptyState = document.querySelector("#emptyState");

  if (!searchInput || !genreSelect || cards.length === 0 || !resultCount || !emptyState) {
    return;
  }

  const filterGames = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedGenre = genreSelect.value;
    let visibleGames = 0;

    cards.forEach((card) => {
      const matchesName = card.dataset.name.includes(searchTerm);
      const matchesGenre = selectedGenre === "todos" || card.dataset.category === selectedGenre;
      const isVisible = matchesName && matchesGenre;
      card.hidden = !isVisible;

      if (isVisible) {
        visibleGames += 1;
      }
    });

    resultCount.innerHTML = `<strong>${visibleGames}</strong> ${visibleGames === 1 ? "juego encontrado" : "juegos encontrados"}`;
    emptyState.classList.toggle("d-none", visibleGames !== 0);
  };

  searchInput.addEventListener("input", filterGames);
  genreSelect.addEventListener("change", filterGames);
}

function initializeGameModal() {
  const detailButtons = document.querySelectorAll(".game-detail-button");
  const modalTitle = document.querySelector("#modalGameTitle");
  const modalGenre = document.querySelector("#modalGameGenre");
  const modalDescription = document.querySelector("#modalGameDescription");
  const modalDuration = document.querySelector("#modalGameDuration");
  const modalImage = document.querySelector("#modalGameImage");
  const modalLink = document.querySelector("#modalGameLink");

  if (detailButtons.length === 0 || !modalTitle || !modalGenre || !modalDescription || !modalDuration || !modalImage || !modalLink) {
    return;
  }

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedGame = games[button.dataset.game];

      if (!selectedGame) {
        return;
      }

      modalTitle.textContent = selectedGame.title;
      modalGenre.textContent = selectedGame.genre;
      modalDescription.textContent = selectedGame.description;
      modalDuration.textContent = selectedGame.duration;
      modalImage.src = selectedGame.image;
      modalImage.alt = selectedGame.alt;
      modalLink.href = selectedGame.link;
    });
  });
}

function initializeWishlist() {
  const button = document.querySelector("#wishlistButton");
  const message = document.querySelector("#wishlistMessage");

  if (!button || !message) {
    return;
  }

  button.addEventListener("click", () => {
    const isSaved = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!isSaved));
    button.textContent = isSaved ? "+ Guardar en mi lista" : "✓ Guardado en mi lista";
    message.textContent = isSaved ? "Nebula Drift fue retirado de tu lista." : "Nebula Drift fue guardado para después.";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeThemeToggle();
  initializeRandomGame();
  initializeCatalogFilters();
  initializeGameModal();
  initializeWishlist();
});
