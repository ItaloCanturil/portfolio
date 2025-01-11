<script setup lang="ts">
import { formatDate } from '~/utils/formatData';

  const search = ref<string>('');
  // const results = await searchContent(search);
  // console.log("🚀 ~ results:", results)
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex items-center justify-between w-full min-h-20">
      <h1 class="font-bold text-2xl">Posts</h1>

      <!-- <input class="input" type="text" v-model="search"> -->
    </div>


    <ContentList path="/blog" v-slot="{ list }">
      <NuxtLink :href="article._path" v-for="article in list" :key="article._path" class="card flex flex-col rounded-lg p-4 border my-2">
          <div class="flex items-center justify-between">
            <span class="dark:text-isabelline-300 text-eerie_black-700">{{ formatDate(article.publishedAt) }}</span>

            <IconArrowRight :size="14" class="-rotate-45 icon"/>
          </div>
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
      </NuxtLink>
    </ContentList>
  </div>
</template>

<style scoped>
.card:hover .icon {
  @apply rotate-0 duration-150 ease-in
}

</style>