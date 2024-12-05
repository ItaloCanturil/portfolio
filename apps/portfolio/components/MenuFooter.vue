<script setup lang="ts">
const emit = defineEmits<{
  (e: 'home'): void,
  (e: 'craft'): void,
  (e: 'blog'): void,
}>()

</script>

<template>
  <div>
    <div class="footer_menu">
      <div class="btn rounded-full " @click="emit('home')">
        <IconHouse
          :size="16"
        />
      </div>
      <div class="btn rounded-full " @click="emit('craft')">
        <IconLightbulb
          :size="16"
        />
      </div>
      <div class="btn rounded-full " @click="emit('blog')">
        <IconPencilRuler
          :size="16"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer_menu {
  @apply bg-red-500 absolute w-[200px] h-[50px] rounded fixed left-[50%] px-2 rounded-full flex items-end;
  transform: translate(-50%, -50%) translateY(80px);
}
</style>
