const toggleColorTheme = () => {
  const userTheme: Ref<string> = ref('light');

  const getTheme = () => localStorage.getItem('colors-theme');

  const setTheme = (theme: string = 'light') => {
    localStorage.setItem('colors-theme', theme);
    userTheme.value = theme;
    document.documentElement.className = theme;
    document.documentElement.dataset.theme = theme;
  }

  const getMediaPreference = () => {
    const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (hasDarkPreference) {
      return "dark";
    }
  }

  onMounted(() => {
    const initUserTheme = getTheme() || getMediaPreference();
    setTheme(initUserTheme);
  })

  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };

  return { toggleTheme, userTheme };
};


export default toggleColorTheme;