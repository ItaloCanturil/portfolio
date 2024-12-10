<script setup lang="ts">

const route = useRoute();
const router = useRouter();

</script>

<template>
  <div class="h-screen w-full dark:bg-night">
    <div class="text-red-600">
      {{ route.fullPath }}
    </div>

    <slot />

    <MenuFooter 
      @blog="() => router.push('/blog')"
      @craft="() => router.push('/craft')"
      @home="() => router.push('/')"
    />
  </div>
</template>