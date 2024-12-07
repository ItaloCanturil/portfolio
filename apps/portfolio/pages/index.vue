<script setup lang="ts">
const route = useRoute();

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div>
    <h1>{{ $t('hello')}}</h1>

    <p>{{ $t('onboarding') }}</p>
  </div>
</template>
