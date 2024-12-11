export default function (callback: (theme: 'light' | 'dark') => void) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  callback(mediaQuery.matches ? 'dark' : 'light');

  mediaQuery.addEventListener('change', (event) => {
    callback(event.matches ? 'dark' : 'light');
  });
}
