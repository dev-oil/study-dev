const body = document.body;
const themeRadios = document.querySelectorAll('input[name="theme"]');

const applyTheme = (theme: string): void => {
  body.classList.remove('light', 'dark');
  body.classList.add(theme);
};

const loadSavedTheme = (): void => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    applyTheme(savedTheme);
    const radio = document.getElementById(
      savedTheme
    ) as HTMLInputElement | null;
    if (radio) radio.checked = true;
  }
};

themeRadios.forEach((radio) => {
  radio.addEventListener('change', (e) => {
    const selected = (e.target as HTMLInputElement).value;
    applyTheme(selected);
    localStorage.setItem('theme', selected);
  });
});

document.addEventListener('DOMContentLoaded', loadSavedTheme);
