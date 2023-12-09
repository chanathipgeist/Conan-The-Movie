<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="header">
    <h2>Reports</h2>
    <RouterLink to="/query/1">To show all conan the movies.</RouterLink>
    <RouterLink to="/query/2">To show conan the movies that stars more than 7.12 scores. </RouterLink>
    <RouterLink to="/query/3">To show conan the movies that have actor/actress(totalCharacters) more than 5.</RouterLink>
    <RouterLink to="/query/4">To show users who like charactor name "Akai Shuichi".</RouterLink>
    <RouterLink to="/query/5">To show users who age more than 17 and like conan the movies 7.</RouterLink>
    <RouterLink to="/query/6">To show characters who is a male.</RouterLink>
    <RouterLink to="/query/7">To show characters who is a good.</RouterLink>
    <RouterLink to="/query/8">To show the average score of conan the movies that contains drama in category.</RouterLink>
    <RouterLink to="/query/9">To count user who like charactor name "Kudo Shinichi".</RouterLink>
    <RouterLink to="/query/10">To sum the total views since conan the movie 1 - present.</RouterLink>
  </div>
  <div id="detail">
    <RouterView />
  </div>
</template>

<style scoped>
a {
  display: block;
}
</style>
