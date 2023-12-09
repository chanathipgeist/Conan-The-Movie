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
    <div class="flex flex-wrap">
      <div v-for="(doc, index) in data" :key="doc.characterId" class="card mx-16  border rounded p-4 w-full">
        <img :src="doc.picture" alt="User Picture" class="w-24 h-24 object-cover mr-4">
        <div class="info">
          <h1 class="text-2xl font-semibold">{{ doc.name }}</h1>
          <p><strong>Age:</strong> {{ doc.age !== null ? doc.age + ' years old' : '?' }}</p>
          <p><strong>Gender:</strong> {{ doc.gender }}</p>
          <p><strong>Description:</strong> {{ doc.description }}</p>
          <p><strong>Good or Bad:</strong> {{ doc.isGood ? 'Good' : 'Not Good' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.card img {
  border-radius: 50%;
}

.card .info {
  flex-grow: 1;
}

/* Add any additional styling or overrides for Tailwind CSS here */
</style>
