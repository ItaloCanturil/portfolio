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
  username: string,
  repo: string
}>();

const languages = ref<LanguagesMap>({});
const loading = ref(true);
const error = ref<string | null>(null);
const repoUrl = computed(() => `https:\\github.com/ItaloCanturil/${props.repo}`);
const languageColors: LanguageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Vue: '#41b883',
  HTML: '#e34c26',
  CSS: '#563d7c',
}

const getLanguage = async () => {
  try {
    const octokit = new Octokit({
      auth: props.token
    });

    const { data: repos } = await octokit.rest.repos.listLanguages({
      owner: props.username,
      repo: props.repo
    })

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
}

onMounted(() => getLanguage());

watch(() => props.repo, () => getLanguage())
</script>

<template>
  <div>
    <div class="max-w-xs text-sm" >
      <div>
        <span>{{ $t('language') }} - </span> 
        <NuxtLink
          class="underline"
          :to="repoUrl"
          external
        >
        {{ props.repo }}
        </NuxtLink>
      </div>

      <div class="flex items-center h-2 rounded-full overflow-hidden my-1">
        <div class="flex h-full" v-for="(value, language) in languages" :key="language" :style="{ width: `${value.percentage}%`, backgroundColor: value.color }">
        </div>
      </div>
      <div class="flex flex-wrap gap-x-4 g-y-1 text-xs">
        <div class="flex items-center gap-1 mb-2" v-for="(value, language) in languages" :key="language">
          <span class="h-2 w-2 rounded-full" :style="{ backgroundColor: value.color}"/>

          <span>{{ language }}</span>

           <span class="text-gray-400">{{ value.percentage.toFixed(1) }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>