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

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
const formatNumber = (number) => {
  return number.toLocaleString(); 
};
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mt-10 mb-4 flex justify-center ">{{ title }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(doc, index) in data" :key="doc.movieId" class="bg-white p-4 rounded-lg shadow-md">
        <img :src="doc.picture" alt="Movie Poster" class="w-full h-32 object-cover mb-4">
        <h3 class="text-lg font-semibold mb-2">{{ doc.name }}</h3>
        <p class="text-gray-600 mb-2">{{ doc.description }}</p>
        <p class="text-gray-400">{{ doc.stars }} stars</p>
        <p class="text-gray-400">{{ formatDate(doc.releaseDate) }}</p>
        <p class="text-gray-400">Views: {{ formatNumber(doc.view) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
