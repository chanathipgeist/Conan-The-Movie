<script setup>
//มี Movie Category และ Character
import { RouterLink } from 'vue-router';
</script>
 
<template>
    <RouterLink :to="{ name: 'MovieList' }">
        <div>
            Movie
        </div>
    </RouterLink>
    <RouterLink :to="{ name: 'CategoryView' }">
        <div>
            Category
        </div>
    </RouterLink>
    <RouterLink :to="{ name: 'CharacterView' }">
        <div>
            Character
        </div>
    </RouterLink>
    
</template>
 
<style scoped></style>