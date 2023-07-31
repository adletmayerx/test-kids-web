<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import { HeaderVue } from "./components";
import { ref } from "vue";

const isLoggedIn = ref(false)

const router = useRouter();

const handleLogin = () => {
  isLoggedIn.value = true;
  router.push('/secrets');
}

</script>

<template>
  <HeaderVue :isLoggedIn="isLoggedIn"></HeaderVue>
  <main class="flex flex-col">
    <RouterView :isLoggedIn="isLoggedIn" @login="handleLogin" />
  </main>
</template>
