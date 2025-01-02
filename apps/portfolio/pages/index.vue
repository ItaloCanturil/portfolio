<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content';

type ProjectType = {
  imgSrc: string,
  title: string,
  badge: string | string[],
  description: string,
};

const query: QueryBuilderParams = { path: '/blog', limit: 2, sort: [{ date: -1}] };

</script>

<template>
  <div class="flex flex-col justify-center h-screen">
    <div class="min-h-20">
      <h1 class="text-xl">{{ $t('hello')}}</h1>

      <p>{{ $t('onboarding') }}</p>
      <div>
        <!-- TODO
          [ ] Tech stack
        -->
      </div>
    </div>

    <div class="divider"></div>
    
    <section>
      <p class="text-xl">{{ $t('recentSection') }}</p>

      <div class="flex items-center gap-2">
        <ContentList :query="query" v-slot="{ list }">
          <NuxtLink :href="article._path" v-for="article in list" :key="article._path" class="card h-28 flex flex-col rounded-lg p-4 border my-2">
              <div class="flex items-center justify-between">
                <span class="dark:text-isabelline-300 text-eerie_black-700">{{ article.publishedAt }}</span>

                <IconArrowRight :size="14" class="-rotate-45 icon"/>
              </div>
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
          </NuxtLink>
        </ContentList>
      </div>
    </section>
    
    <div class="divider"></div>
    
    <section>
      <p class="text-xl">{{ $t('projectSection') }}</p>
      <div class="grid grid-cols-3 gap-2 place-items-center">

      </div>
    </section>
  </div>
</template>