<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-matterhorn">
    <nav class="mx-auto max-w-7xl w-full flex justify-between py-4 px-3 md:justify-end md:gap-12">
      <RouterLink to="/login" class="text-gray-50 text-lg">Войти</RouterLink>
      <RouterLink to="/login" class="text-gray-50 text-lg">Зарегистрироваться</RouterLink>
    </nav>
  </header>
</template>
