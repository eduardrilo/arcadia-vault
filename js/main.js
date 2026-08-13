"use strict";

const featuredGames = [
  { title: "Nebula Drift", genre: "Aventura" },
  { title: "Afterlight Protocol", genre: "Estrategia" },
  { title: "Mossbound", genre: "Aventura" },
  { title: "Pixel Forge", genre: "Simulación" }
];

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
  applyTheme(getStoredTheme() || "light");

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
    const selectedGame = featuredGames[Math.floor(Math.random() * featuredGames.length)];
    result.innerHTML = `Señal encontrada: <strong>${selectedGame.title}</strong> · ${selectedGame.genre}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeThemeToggle();
  initializeRandomGame();
});
