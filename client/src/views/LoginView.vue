<script setup lang="ts">
import { TextVue } from '../components/shared';

const handleSubmit = () => {
  fetch(`http://localhost:3000/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: "include",
    body: JSON.stringify({
      "email": "s@emsail.com",
      "password": "123321111a"
    }),
  }).then((result) => console.log(result));
}

</script>

<template>
  <div class="flex flex-col items-center px-3 py-16">
    <h1 class="text-nero text-2xl">Добро пожаловать!</h1>
    <TextVue>Для входа введите свои данные</TextVue>

    <form @submit.prevent="handleSubmit" class="flex flex-col justify-start gap-4 mt-11">
      <input type="email" placeholder="email" class="p-3 w-72 h-12 border border-matterhorn rounded xl:w-96">
      <input type="password" placeholder="пароль" class="p-3 w-72 h-12 border border-matterhorn rounded xl:w-96">

      <button type="submit" class="w-72 h-12 bg-matterhorn text-gray-50 rounded xl:w-96">Войти</button>
    </form>
  </div>
</template>
