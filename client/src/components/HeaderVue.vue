<script setup lang="ts">
import { RouterLink} from "vue-router";

defineProps<{ isLoggedIn: boolean }>();

const emit = defineEmits<{ (e: "signout"): void }>();


const handleClick = () => {
  fetch(`http://localhost:3000/signout`, {
    method: "DELETE",
    credentials: "include",
  }).then(() => {
    emit("signout");
  }).catch(e => console.error(e))
}

</script>

<template>
  <header class="bg-matterhorn">
    <nav v-if="!isLoggedIn" class="mx-auto max-w-7xl w-full flex justify-between py-4 px-3 md:gap-3 xl:px-36">
      <RouterLink to="/" class="text-gray-50 text-md">Главная</RouterLink>
      <div class="flex gap-3">
        <RouterLink to="/login" class="text-gray-50 text-md hover:opacity-70 transition-opacity">Вход
        </RouterLink>
        <RouterLink to="/register" class="text-gray-50 text-md hover:opacity-70 transition-opacity">
          Регистрация</RouterLink>
      </div>
    </nav>
    <nav v-else class="mx-auto max-w-7xl w-full flex justify-between py-4 px-3 md:gap-3 xl:px-36">
      <div class="flex gap-3">
        <RouterLink to="/" class="text-gray-50 text-md hover:opacity-70 transition-opacity">Главная
        </RouterLink>
        <RouterLink to="/secrets" class="text-gray-50 text-md hover:opacity-70 transition-opacity">Секреты
        </RouterLink>
        <!-- <RouterLink to="/task" class="text-gray-50 text-md hover:opacity-70 transition-opacity">Задание</RouterLink> -->
      </div>
      <button class="text-gray-50 text-md hover:opacity-70 transition-opacity" @click="handleClick">Выйти</button>
    </nav>
  </header>
</template>
