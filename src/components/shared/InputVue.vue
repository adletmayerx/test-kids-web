<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ type: "email" | "password", placeholder: string, }>()

const emit = defineEmits<{
  (e: "inputchange", params: { inputValue: string, type: "email" | "password" }): void;
}>()

const value = ref('')


</script>

<template>
  <input :type="type" :placeholder="placeholder" class="p-3 w-72 h-12 border border-matterhorn rounded xl:w-96"
    v-model="value" @change="emit('inputchange', { inputValue: value, type })">
</template>
