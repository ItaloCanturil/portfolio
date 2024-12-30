<script lang="ts" setup>

defineProps<{
  imgSrc: string,
  title: string,
  badge: string | string[],
  description: string,
}>();
</script>

<template>
  <div class="card">
    <NuxtImg :src="imgSrc"/>

    <div class="card-body">
      <div class="card-title">
        {{ title }}
      </div>

      <p>{{ description }}</p>

      <div class="card-actions justify-end">
        <div v-if="Array.isArray(badge)" class="badge" v-for="text in badge">{{ text }}</div>
        <div v-else="Array.isArray(badge)" class="badge">{{ badge }}</div>
      </div>
    </div>
  </div>
</template>