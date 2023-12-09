<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="header">
    <h2 class="text-2xl font-bold mb-4 text-white">For Query</h2>
    <nav>
      <RouterLink to="/query/1" class="link">Show all Conan the movies</RouterLink>
      <RouterLink to="/query/2" class="link">Show Conan the movies with scores > 7.12</RouterLink>
      <RouterLink to="/query/3" class="link">Show Conan the movies with > 2 characters</RouterLink>
      <RouterLink to="/query/4" class="link">Show users who like "Akai Shuichi"</RouterLink>
      <RouterLink to="/query/5" class="link">Show users age > 17 who like movie 01</RouterLink>
      <RouterLink to="/query/6" class="link">Show male characters</RouterLink>
      <RouterLink to="/query/7" class="link">Show good characters</RouterLink>
      <RouterLink to="/query/8" class="link">Show average score of drama movies</RouterLink>
      <RouterLink to="/query/9" class="link">Count users who like "Kudo Shinichi"</RouterLink>
      <RouterLink to="/query/10" class="link">Sum total views of movies 1-15</RouterLink>
    </nav>
  </div>
  <div id="detail" class="mt-8">
    <RouterView />
  </div>
</template>

<style scoped>
a.link {
  display: block;
  padding: 10px ;
  padding-left: 30px ;  
  color: #ffffff;
  transition: background-color 0.3s;
}

a.link:hover {
  background-color: #020916;
}
#header{
  /* background-image: url('https://firebasestorage.googleapis.com/v0/b/project-conan-95b4a.appspot.com/o/bg.jpg?alt=media&token=cb9dc52f-4f1f-46f3-9e45-c1ec54bd8c49'); */
  background-color: #334f80;
  background-size: cover;
  background-position: center;
  padding: 16px;
  border-radius: 8px;
  opacity: 0.9;}
#detail {
  background-size: cover;
  background-position: center;
  padding: 16px;
  border-radius: 8px;
  opacity: 0.9;
}
</style>
