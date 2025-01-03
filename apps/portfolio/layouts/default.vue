<script setup lang="ts">

const route = useRoute();
const router = useRouter();

</script>

<template>
  <div class="min-h-screen w-full dark:bg-night bg-slate-100 dark:text-[#edede9] text-eerie_black">
    <div class="max-w-3xl antialiased m-auto px-4 h-full">
      <slot />
    </div>

    <MenuFooter 
      @blog="() => router.push('/blog')"
      @craft="() => router.push('/craft')"
      @home="() => router.push('/')"
      @toggle=""
    />
  </div>
</template>