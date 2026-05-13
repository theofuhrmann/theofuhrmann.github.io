const storageKey = "theme-preference";

const getColorPreference = () => {
  let preference = localStorage.getItem(storageKey);

  if (!preference) {
    preference = window.matchMedia("(prefers-color-scheme: dark-mode)").matches
      ? "dark-mode"
      : "light-mode";
  }

  return preference;
};

const setPreference = (themeName) => {
  localStorage.setItem(storageKey, themeName);

  document.firstElementChild.setAttribute("data-theme", themeName);
};

const togglePreference = () => {
  setPreference(getColorPreference() === "dark-mode" ? "light-mode" : "dark-mode");
};

(() => {
  const theme = getColorPreference();

  setPreference(theme);
})();
