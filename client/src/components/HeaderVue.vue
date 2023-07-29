<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-matterhorn">
    <nav class="mx-auto max-w-7xl w-full flex justify-between py-4 px-3 md:gap-3">
      <RouterLink to="/" class="text-gray-50 text-md">Главная</RouterLink>
      <div class="flex gap-3">
        <RouterLink to="/login" class="text-gray-50 text-md">Вход</RouterLink>
        <RouterLink to="/register" class="text-gray-50 text-md">Регистрация</RouterLink>
      </div>
    </nav>
  </header>
</template>
