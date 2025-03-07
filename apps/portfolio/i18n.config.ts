export default defineI18nConfig(() => ({
  legacy: false,
  locale: "pt",
  messages: {
    en: {
      hello: "Hello, I'm Italo Canturil",
      onboarding: "I'm a Web developer specializing in Front-End, currently building various projects to improve skills.",
      recentSection: "Recent posts",
      projectSection: "Projects",
      building: "Building...",
      language: 'Languages'
    },
    pt: {
      hello: "Olá, sou o Italo Canturil",
      onboarding: "Desenvolverdor Web especializado no Front-End, atualmente construindo vários projetos para melhorar habilidades.",
      recentSection: "Posts recentes",
      projectSection: "Projetos",
      building: "Em construção...",
      language: 'Linguagens'
    }
  }
}))