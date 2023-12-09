<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="header">
    <h2>Reports</h2>
    <RouterLink to="/query/1">1. Cities with population &gt; 100000</RouterLink>
    <RouterLink to="/query/2">2. Cities in New York</RouterLink>
    <RouterLink to="/query/3">3. List zips in DC with population &gt; 40000</RouterLink>
    <RouterLink to="/query/4">4. List zips in NY or in DC with population > 60000</RouterLink>
    <RouterLink to="/query/5">5. List zips in DC or cities with population &gt; 100000</RouterLink>
    <RouterLink to="/query/6">6. List zips in DC and sort the data by population</RouterLink>
    <RouterLink to="/query/7">7. List zips latitude between 71 and 73</RouterLink>
    <RouterLink to="/query/8">8. Count zips in DC or cities with population &gt; 100000</RouterLink>
    <RouterLink to="/query/9">9. Show the total population in DC (state)</RouterLink>
    <RouterLink to="/query/10">10. Show the average population in NY (state)</RouterLink>

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
