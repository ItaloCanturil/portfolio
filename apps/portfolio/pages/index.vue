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
    </section>
    
    <div class="divider"></div>
    
    <section>
      <p class="text-xl">{{ $t('projectSection') }}</p>
      <div class="grid grid-cols-3 gap-2 place-items-center">

      </div>
    </section>
  </div>
</template>