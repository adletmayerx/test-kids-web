<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div className="flex h-full grow flex-col items-center bg-gray-50 pt-80 pb-8 md:pt-96 md:pb-52 xl:pt-60 xl:pb-16">
    <h1 className="text-7xl text-matterhorn md:text-9xl">404</h1>
    <p className="mt-3 text-xs text-matterhorn md:text-base">Страница не&nbsp;найдена</p>
    <RouterLink className="mt-auto text-xs text-blue md:text-sm hover:opacity-70 transition-opacity" to="/"> На главную </RouterLink>
  </div>
</template>