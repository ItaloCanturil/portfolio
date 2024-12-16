<script setup lang="ts">
type ProjectType = {
  imgSrc: string,
  title: string,
  badge: string | string[],
  description: string,
};

</script>

<template>
  <div class="flex flex-col justify-center h-screen">
    <div class="min-h-20">
      <h1>{{ $t('hello')}}</h1>

      <p>{{ $t('onboarding') }}</p>
    </div>

    <div class="divider"></div>

    <div class="grid grid-cols-3 gap-2 place-items-center">

    </div>
  </div>
</template>