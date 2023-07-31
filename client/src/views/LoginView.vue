<script setup lang="ts">
import { computed, ref } from 'vue';
import { TextVue, ButtonVue, InputVue } from '../components/shared';

const email = ref('');
const password = ref('');
const isDisabled = computed(() => !email.value.length || !password.value.length);

const emit = defineEmits<{
  (e: "login"): void;
}>();

const handleInputChange = (params: { inputValue: string, type: "email" | "password" }) => {
  if (params.type === "email") {
    email.value = params.inputValue;
  } else if (params.type === 'password') {
    password.value = params.inputValue;
  }
}

const handleSubmit = () => {
  fetch(`http://localhost:3000/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: "include",
    body: JSON.stringify({
      "email": email.value,
      "password": password.value
    }),
  }).then((result) => {
    console.log(result)

    emit('login')
  }).catch(e => console.error(e));
}
</script>

<template>
  <div class="flex flex-col items-center px-3 py-16">
    <h1 class="text-nero text-2xl">Добро пожаловать!</h1>
    <TextVue>Для входа введите свои данные</TextVue>

    <form @submit.prevent="handleSubmit" class="flex flex-col justify-start gap-4 mt-11">
      <InputVue type="email" placeholder="email" class="p-3 w-72 h-12 border border-matterhorn rounded xl:w-96"
        @inputchange="handleInputChange" />
      <InputVue type="password" placeholder="пароль" class="p-3 w-72 h-12 border border-matterhorn rounded xl:w-96"
        @inputchange="handleInputChange" />

      <ButtonVue type="submit" class="w-72 h-12 bg-matterhorn text-gray-50 rounded xl:w-96" :isDisabled="isDisabled">Войти
      </ButtonVue>
    </form>
  </div>
</template>
