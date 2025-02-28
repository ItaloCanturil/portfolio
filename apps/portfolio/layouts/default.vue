<script setup lang="ts">

const route = useRoute();
const router = useRouter();
const username = 'italocanturil';
const githubToken = useRuntimeConfig().public.GITHUB_TOKEN
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
      <GithubLanguageStats :username="username" :token="githubToken"/>

      <div class="flex flex-col items-end">
        <div class="flex items-center gap-2">
          <img class="rounded-full w-6" src="/ItaloLogo.png" alt="Logo Italo">

          Italo Canturil
        </div>

        <span class="text-xs">Copyright &copy; 2025 - Todos os direitos reservados</span>

      </div>
    </footer>
  </div>
</template>