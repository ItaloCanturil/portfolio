<script lang="ts" setup>
import { IconGithub, IconLinkedin } from '#build/components';

type Social = {
  name: string,
  link: string,
  icon: any
}

const socialArr: Social[] = [
  {
    name: 'Github',
    link: 'https://github.com/ItaloCanturil',
    icon: IconGithub,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/italo-canturil/',
    icon: IconLinkedin,
  },
]
</script>

<template>
  <div
    
  >
    <NuxtLink
      v-for="social in socialArr"
      :to="social.link"
      :target="social.link ? '_blank' : ''"
      no-rel
    >
      <component :is="social.icon" size="24"/>
      {{ social.name }}
    </NuxtLink>
  </div>
</template>