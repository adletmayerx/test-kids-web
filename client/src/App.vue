<script setup lang="ts">
import { RouterView } from "vue-router";
import { HeaderVue } from "./components";
import { ref } from "vue";

const isLoggedIn = ref(true)

</script>

<template>
  <HeaderVue :isLoggedIn="isLoggedIn"></HeaderVue>
  <main class="flex flex-col">
    <RouterView />
  </main>
</template>
