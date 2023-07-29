<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-matterhorn">
    <nav class="flex justify-between py-4 px-3">
      <RouterLink to="/login" class="text-gray-50 text-lg">Войти</RouterLink>
      <RouterLink to="/login" class="text-gray-50 text-lg">Зарегистрироваться</RouterLink>
    </nav>
  </header>
</template>
