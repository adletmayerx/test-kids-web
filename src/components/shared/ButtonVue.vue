<script setup lang="ts">
import clsx from 'clsx';

withDefaults(
  defineProps<{ isDisabled?: boolean }>(), { isDisabled: false }
)
</script>

<template>
  <button type="submit" :class="clsx('w-72 h-12 bg-matterhorn text-gray-50 rounded xl:w-96', isDisabled && 'bg-gray-400 cursor-default')"
    :disabled="isDisabled">
    <slot></slot>
  </button>
</template>
