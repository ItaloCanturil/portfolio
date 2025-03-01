<template>
  <main class="flex flex-col justify-center min-h-screen prose">
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer :value="doc"/>
    </ContentDoc>
  </main>
</template>