<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    reqired: true,
  },
});
</script>

<template>
  <h2>{{ title }}</h2>
  <div>{{ data }}</div>
</template>

<style scoped></style>
