<script setup lang="ts">
import { ref } from 'vue';
import api from "../utils/api"

const feedback = ref('');
const feedbackIsSent = ref(false);

const handleSubmit = () => {
  api.addFeedback(feedback.value).then(() => {
    feedbackIsSent.value = true;
  });
}
</script>

<template>
  <div class="mx-auto max-w-7xl w-full flex flex-col py-12 px-4 gap-3 xl:py-28 xl:px-36">
    <a href="https://github.com/adletmayerx/test-kids-web" target="_blank"
      class="text-nero text-2xl hover:opacity-70 transition-opacity">🍯 - ссылка на
      репозиторий</a>
    <div class="flex flex-col gap-3">
      <h3 class="text-nero text-2xl">Моя любимая фишка из css 🎨:</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/YUdbOvoeSCk" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen class="w-full max-w-[560px]"></iframe>
    </div>
    <form v-if="!feedbackIsSent" class="flex flex-col gap-3" @submit.prevent="handleSubmit">
      <label class="text-nero text-2xl">Буду рад, если вы оставите отзыв 📜:</label>
      <textarea name="feedback" cols="30" rows="10" class="border border-matterhorn rounded p-3"
        v-model="feedback"></textarea>
      <button type="submit" class="w-72 h-12 bg-matterhorn text-gray-50 rounded xl:w-96">Отправить отзыв</button>
    </form>
    <p v-else class="text-nero text-2xl">
      💗 Спасибо за ваш отзыв!
    </p>
  </div>
</template>
