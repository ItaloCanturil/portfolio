<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col justify-center">
    blog


    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="flex flex-col rounded-lg p-4 border my-2">
        <NuxtLink :href="article._path">
          <span>{{ article.updatedAt }}</span>
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>