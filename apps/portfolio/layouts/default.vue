<script setup lang="ts">
useHead({
  title: `Italo's Portfolio`,
  meta: [
    { name: 'author', content: 'Italo Canturil'},
    { name: 'application-name', content: `Italo's Portfolio`},
    { name: 'description', content: 'Portfolio to show skills and how Italo develop things'},
    { name: 'color-scheme', content: 'dark light'},
  ],
  htmlAttrs: {
    class: 'dark',
  }
})


const route = useRoute();
const router = useRouter();
const username = 'italocanturil';
const repo = ref('portfolio');
const githubToken = useRuntimeConfig().public.GITHUB_TOKEN


provide('message', repo);
</script>

<template>
  <div class="min-h-screen w-full dark:bg-night bg-slate-100 dark:text-[#edede9] text-eerie_black">
    <div class="max-w-3xl antialiased m-auto px-4 h-full">
      <slot />
    </div>

    <MenuFooter 
      @blog="() => router.push('/blog')"
      @craft="() => router.push('/craft')"
      @home="() => router.push('/')"
      @toggle=""
    />

    <footer class="p-4 flex justify-between items-end max-w-3xl antialiased m-auto pb-32">
      <GithubLanguageStats :username="username" :token="githubToken" :repo="repo"/>

      <div class="flex flex-col items-end">
        <div class="flex items-center gap-2">
          <NuxtImg width="24" class="rounded-full" src="/ItaloLogo.png" alt="Logo Italo"/>

          Italo Canturil

        </div>

        <span class="text-xs">2025 - Made for fun</span>

      </div>
    </footer>
  </div>
</template>