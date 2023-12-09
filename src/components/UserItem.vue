<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    reqired: true,
  },
});
</script>
<template>
  <div>
    <h2 class="text-2xl font-bold mt-10 mb-4 flex justify-center ">{{ title }}</h2>
    <div class="flex flex-wrap justify-center">
      <div v-for="(doc, index) in data" :key="doc.id" class="user-card mx-5">
        <img :src="doc.picture" alt="User Picture" class="w-16 h-16 object-cover mr-4">
        <div>
          <h3 class="text-lg font-semibold">{{ doc.name }}</h3>
          <p>{{ doc.age }} years old</p>
          <p>{{ doc.gender }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.user-card img {
  border-radius: 50%;
}

/* Add any additional styling or overrides for Tailwind CSS here */
</style>

