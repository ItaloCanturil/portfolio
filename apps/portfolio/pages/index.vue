<script setup lang="ts">
  import type { QueryBuilderParams } from '@nuxt/content';

  type ProjectType = {
    hasLink: boolean,
    link: string,
    title: string,
    badge: string | string[],
    description: string,
    across: string[],
  };

  const query: QueryBuilderParams = { path: '/blog', limit: 3, sort: [{ publishedAt: -1 }] };

  const projects: ProjectType[] = [
    {
      hasLink: true,
      link: "beauty-reservation.vercel.app",
      title: "Beauty Calendar",
      description: "A Calendar for Beauty Professionals admin and client with Google Calendar integrated",
      badge: "Indie project",
      across: ['Typescript', 'Supabase (Postgre SQL)', 'PrimeVue/UI', 'Nuxt']
    },
    {
      hasLink: true,
      link: "feelingdiary.com.br",
      title: "Emotion Management",
      description: "A tracker of emotions and thoughs",
      badge: "Indie project",
      across: ['PWA', 'Quasar', 'Typescript']
    },
  ]
</script>

<template>
  <div class="flex flex-col h-full justify-center">
    <div class="min-h-20 mt-4 flex flex-col gap-2">
      <div>
        <h1 class="text-xl">{{ $t('hello') }}</h1>
        <p>{{ $t('onboarding') }}</p>
      </div>
      <UITechStack />

      <div class="mt-4">
      </div>
    </div>

    <div class="divider"></div>

    <section>
      <p class="text-xl">{{ $t('recentSection') }}</p>

      <div class="flex items-center gap-2">
        <BlogList :query="query" />
      </div>
    </section>

    <div class="divider"></div>

    <section>
      <p class="text-xl">{{ $t('projectSection') }}</p>
      <div class="flex flex-col gap-4">
        <div class="card flex flex-col rounded-lg p-4 border my-2 gap-4" v-for="project in projects"
          :key="project.title">
          <div class="flex items-center justify-between">
            <div class="font-bold flex flex-col">
              {{ project.title }}
              <span class="font-normal text-success text-xs">{{ project.badge }}</span>
            </div>

            <NuxtLink v-if="project.hasLink" :href="project.link" external class="flex items-center gap-1">
              <IconExternalLink :size="16" />
              External link
            </NuxtLink>
          </div>

          <div class="flex flex-col gap-2">
            <div>{{ project.description }}</div>
            <div class="flex items-center gap-2">
              <div v-for="badge in project.across" :key="badge" class="badge badge-neutral">{{ badge }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>