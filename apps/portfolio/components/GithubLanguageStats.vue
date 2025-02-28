<script lang="ts" setup>
import { Octokit } from 'octokit';

interface LanguageData {
  bytes: number;
  percentage: number;
  color: string;
}

interface LanguagesMap {
  [key: string]: LanguageData;
}

interface LanguageColors {
  [key: string]: string;
}

const props = defineProps<{
  token: string,
  username: string
}>();

const languages = ref<LanguagesMap>({});
const loading = ref(true);
const error = ref<string | null>(null);
const languageColors: LanguageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Vue: '#41b883',
  HTML: '#e34c26',
  CSS: '#563d7c',
}

onMounted(async () => {
  try {
    const octokit = new Octokit({
      auth: props.token
    });

    const { data: repos } = await octokit.rest.repos.listLanguages({
      owner: props.username,
      repo: 'portfolio'
    })
    console.log("🚀 ~ onMounted ~ repos:", repos) 

    const totalBytes = Object.values(repos).reduce((a, b) => a + b, 0);
    
    const formattedLanguage: LanguagesMap = {}

    for (const [language, bytes] of Object.entries(repos)) {
      formattedLanguage[language] = {
        bytes,
        percentage: (bytes / totalBytes * 100),
        color: languageColors[language] || '#858585'
      }
    }

    languages.value = Object.fromEntries(
      Object.entries(formattedLanguage).sort((a, b) => b[1].bytes - a[1].bytes)
    )

    loading.value = false
  } catch (err: any) {
    error.value = `Error fetching language stats: ${err.message}`
    loading.value = false
  }
})

</script>

<template>
  <div>
    <div class="max-w-xs text-sm" v-for="(value, language) in languages" :key="language">
      <div class="mb-2">{{ language }} - {{ value.percentage.toFixed(1) }}%</div>
      <div class="language-progress rounded-full h-[3px]" :style="{ width: `${value.percentage}%`, backgroundColor: value.color }"></div>
    </div>
  </div>
</template>