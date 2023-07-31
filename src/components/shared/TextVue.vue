<script setup lang="ts">
import clsx from "clsx";
withDefaults(
  defineProps<{ main?: boolean }>(), { main: false }
)
</script>

<template>
  <p :class="clsx('text-nero xl:max-w-xl', main ? 'text-2xl' : 'text-xl')">
    <slot></slot>
  </p>
</template>
