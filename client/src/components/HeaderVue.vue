<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{ isLoggedIn: boolean }>()
</script>

<template>
  <header class="bg-matterhorn">
    <nav v-if="!isLoggedIn" class="mx-auto max-w-7xl w-full flex justify-between py-4 px-3 md:gap-3">
      <RouterLink to="/" class="text-gray-50 text-md">Главная</RouterLink>
      <div class="flex gap-3">
        <RouterLink to="/login" class="text-gray-50 text-md">Вход</RouterLink>
        <RouterLink to="/register" class="text-gray-50 text-md">Регистрация</RouterLink>
      </div>
    </nav>
    <nav v-else class="mx-auto max-w-7xl w-full flex justify-between py-4 px-3 md:gap-3">
      <div class="flex gap-3">
        <RouterLink to="/" class="text-gray-50 text-md">Главная</RouterLink>
        <RouterLink to="/secrets" class="text-gray-50 text-md">Секреты</RouterLink>
        <RouterLink to="/task" class="text-gray-50 text-md">Задание</RouterLink>
      </div>
      <RouterLink to="/hell" class="text-gray-50 text-md">Выйти</RouterLink>
    </nav>
  </header>
</template>
