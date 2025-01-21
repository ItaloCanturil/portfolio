<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

defineProps<{
  query?: QueryBuilderParams
}>()

</script>

<template>
  <ContentList :quer="query" v-slot="{ list }">
    <NuxtLink :href="article._path" v-for="article in list" :key="article._path" class="card flex flex-col rounded-lg p-4 border my-2 min-h-28">
        <div class="flex items-center justify-between">
          <span class="dark:text-isabelline-300 text-eerie_black-700">{{ formatDate(article.publishedAt) }}</span>

          <IconArrowRight :size="14" class="-rotate-45 icon"/>
        </div>
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
    </NuxtLink>
  </ContentList>
</template>

<style scoped>
.card:hover .icon {
  @apply rotate-0 duration-150 ease-in
}

</style>