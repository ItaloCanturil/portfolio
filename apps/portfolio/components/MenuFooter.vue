<script setup lang="ts">
import { Component } from 'vue';
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
      <div v-for="(item, index) in menuArr" :key="index">
        <div class="btn rounded-full footer__btn relative" @click="emit(item.event)" v-if="item.type === 'intern'">
          <span class="absolute bottom-14 p-1 bg-night rounded hidden tooltip text-[10px]">
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
          class="btn rounded-full footer__btn relative"
        >
          <span class="tooltip">
            {{ item.tooltip }}
          </span>
          <component :is="item.icon" size="16"/>
        </NuxtLink>

        <div class="btn rounded-full footer__btn relative" @click="toggleTheme" v-if="item.type === 'toggle'">
          <span class="tooltip">
            {{ item.tooltip }}
          </span>
          <component :is="item.icon" size="16"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer_menu {
  @apply bg-onyx h-[50px] fixed left-[50%] px-2 rounded-full flex items-center justify-between gap-1;
  transform: translate(-50%, -50%) translateY(80px);
}

.footer__btn {
  @apply transition-transform ease-in duration-300;
}

.footer__btn:hover {
  @apply scale-110;
}

.footer__btn:hover .tooltip {
   @apply block;
}

.tooltip {
  @apply absolute bottom-14 p-1 bg-night rounded text-[10px] hidden;
}
</style>
