<template>
  <main class="flex flex-col items-center w-full justify-center min-h-screen">

    <div class="prose">
      <ContentDoc v-slot="{ doc }">
        <ContentRenderer :value="doc"/>
      </ContentDoc>
    </div>
  </main>
</template>