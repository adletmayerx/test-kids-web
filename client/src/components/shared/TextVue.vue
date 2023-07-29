<script setup lang="ts">
import clsx from "clsx";
withDefaults(
  defineProps<{ main: boolean }>(), { main: false }
)
</script>

<template>
  <p :class="clsx('text-nero', main ? 'text-2xl' : 'text-xl')">
    <slot></slot>
  </p>
</template>
