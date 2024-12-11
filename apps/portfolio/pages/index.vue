<script setup lang="ts">
const route = useRoute();

</script>

<template>
  <div class="flex flex-col justify-center h-screen">
    <h1>{{ $t('hello')}}</h1>

    <p>{{ $t('onboarding') }}</p>

    <div class="divider"></div>
  </div>
</template>