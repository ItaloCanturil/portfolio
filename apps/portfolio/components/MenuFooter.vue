<script setup lang="ts">
import type { Component } from 'vue';
import { House, Lightbulb, PencilRuler, Github, Linkedin, Moon, Sun } from 'lucide-vue-next';

const { setLocale } = useI18n();

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
    icon: [Moon, Sun],
    tooltip: 'Toggle theme',
  }
]

// const toggleTheme = () => {
//   const theme = localStorage.getItem('colors-theme');

//   if (theme) {
//     if (theme === 'light') {
//       document.documentElement.classList.add('dark');
//       document.documentElement.classList.remove('light');
//       localStorage.setItem('colors-theme', 'dark');
//     } else {
//       document.documentElement.classList.add('light');
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('colors-theme', 'light');
//     }
//   }
// }

const { toggleTheme, userTheme} = toggleColorTheme();
console.log("🚀 ~ userTheme:", userTheme.value)
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

        <div v-if="item.type === 'toggle'">
          <div v-show="userTheme === 'light'" class="btn rounded-full block_item relative" @click="toggleTheme('dark')">
            <span class="tooltip">
              {{ item.tooltip }}
            </span>
            <component :is="item.icon[0]" size="16"/>
          </div>
          <div v-show="userTheme === 'dark'" class="btn rounded-full block_item relative" @click="toggleTheme('light')">
            <span class="tooltip">
              {{ item.tooltip }}
            </span>
            <component :is="item.icon[1]" size="16"/>
          </div>
        </div>

        <!-- <details class="btn rounded-full block_item relative">
          <summary>🔁</summary>
          <ul>
            <li @click="setLocale('pt')">BR</li>
            <li @click="setLocale('en')">EUA</li>
          </ul>
        </details> -->
      </div>
    </div>
  </div>
</template>

<style scoped>

.footer_menu {
  @apply dark:bg-onyx-100 bg-[#edede9] h-[50px] fixed left-[50%] bottom-[100px] px-2 py-1 rounded-full flex items-center justify-between gap-1;
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
  @apply btn rounded-full relative dark:bg-onyx-400 bg-[#f2f2f2ff] from-inherit h-9 min-h-9 border-[#dbdfe2ff] dark:border-davys_gray-100;

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
