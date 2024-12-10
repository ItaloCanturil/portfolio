<script setup lang="ts">
import type { Component } from 'vue';
import { House, Lightbulb, PencilRuler, Github, Linkedin, Moon } from 'lucide-vue-next';

const emit = defineEmits<{
  (e: 'home'): void,
  (e: 'craft'): void,
  (e: 'blog'): void,
}>()

type Routes = {
  type: 'intern',
  icon: Component,
  event: 'home' | 'craft' | 'blog',
  tooltip: string
}

type ToggleThemer = {
  type: 'toggle',
  icon: Component,
  tooltip: string,
}

type Social = {
  type: 'social',
  icon: Component,
  tooltip: string,
  link: string
}

type Divisor = {
  type: string,
}

type MenuItem = Routes | ToggleThemer | Social | Divisor

const menuArr: MenuItem[] = [
  {
    type: 'intern',
    icon: House,
    event: 'home',
    tooltip: 'Home'
  },
  {
    type: 'intern',
    icon: Lightbulb,
    event: 'craft',
    tooltip: 'Craft'
  },
  {
    type: 'intern',
    icon: PencilRuler,
    event: 'blog',
    tooltip: 'Blog'
  },
  {
    type: 'divisor',
  },
  {
    type: 'social',
    icon: Github,
    tooltip: 'Github',
    link: 'https://github.com/ItaloCanturil',
  },
  {
    type: 'social',
    tooltip: 'Linkedin',
    link: 'https://www.linkedin.com/in/italo-canturil/',
    icon: Linkedin,
  },
  {
    type: 'divisor'
  },
  {
    type: 'toggle',
    icon: Moon,
    tooltip: 'Toggle theme',
  }
]

const toggleTheme = () => {
  document.documentElement.toggleAttribute('dark');
}
</script>

<template>
  <div>
    <div class="footer_menu">
      <div class="blocky" v-for="(item, index) in menuArr" :key="index">
        <div class="block_item" @click="emit(item.event)" v-if="item.type === 'intern'">
          <span class="tooltip">
            {{ item.tooltip }}
          </span>
          <component :is="item.icon" size="16"/>
        </div>

        <hr class="h-[16px] w-[2px] bg-slate-50 rounded-md" v-if="item.type === 'divisor'">

        <NuxtLink
          v-if="item.type === 'social'"
          :href="item.link"
          :target="item.link ? '_blank' : ''"
          no-rel
          class="btn rounded-full block_item relative"
        >
          <span class="tooltip">
            {{ item.tooltip }}
          </span>
          <component :is="item.icon" size="16"/>
        </NuxtLink>

        <div class="btn rounded-full block_item relative" @click="toggleTheme" v-if="item.type === 'toggle'">
          <span class="tooltip">
            {{ item.tooltip }}
          </span>
          <component :is="item.icon" size="16"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --lerp-0: 1;
  --lerp-1: 0.5;
  --lerp-2: 0;
}

.footer_menu {
  @apply bg-onyx-100 h-[50px] fixed left-[50%] px-2 py-1 rounded-full flex items-center justify-between gap-1;
  transform: translate(-50%, -50%) translateY(80px);
}

.blocky {
  display: grid;
  place-items: center;
  align-content: center;
  flex: calc(0.2 + (var(--lerp, 0) * 1.5));
  transition: flex 0.2s;
  position: relative;
}

.block_item {
  @apply btn rounded-full relative bg-onyx-400 from-inherit h-9 min-h-9;

  transform: translateY(calc(var(--lerp) * -55%));
  transition: transform 0.2s;
	transform-origin: 50% 100%;
}

.block_item:hover {
  @apply bg-onyx-400 from-inherit;
}

.blocky:hover .block_item .tooltip {
   @apply block;
}

.tooltip {
  @apply absolute bottom-10 p-1 bg-night rounded text-[10px] hidden;
}

:is(.blocky:hover, .blocky:focus-visible) {
  --lerp: var(--lerp-0);
  z-index: 5;
}

.blocky:has( + :is(.blocky:hover, .blocky:focus-visible)), :is(.blocky:hover, .blocky:focus-visible) + .blocky {
  --lerp: var(--lerp-1);
  z-index: 4;
}

.blocky:has( + .blocky + :is(.blocky:hover, .blocky:focus-visible)), :is(.blocky:hover, .blocky:focus-visible) + .blocky + .blocky {
  --lerp: var(--lerp-2);
  z-index: 3;
}

.blocky:has( + .blocky + :is(.blocky:hover, .blocky:focus-visible)), :is(.blocky:hover, .blocky:focus-visible) + .blocky + .blocky + .blocky {
  --lerp: var(--lerp-2);
  z-index: 3;
}
</style>
