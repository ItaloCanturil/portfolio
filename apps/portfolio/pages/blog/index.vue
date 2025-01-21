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

    <BlogList />
  </div>
</template>

