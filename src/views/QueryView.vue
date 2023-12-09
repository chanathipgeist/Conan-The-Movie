<script setup>
import { ref, onMounted, watch } from "vue";
import { collection, query, where, getDocs, limit,or,average,orderBy, getCountFromServer,getAggregateFromServer, sum } from "firebase/firestore";
import db from "../firebase/init.js";
import MovieItem from "../components/MovieItem.vue";
import { useRoute } from "vue-router";
import CharacterItem from "../components/CharacterItem.vue";
import UserItem from "../components/UserItem.vue";

const movies = ref([]);   
const characters = ref([]);   
const users = ref([]);   
const title = ref("");
const count = ref("");
const route = useRoute();
const id = ref("")
const loadComponent=ref(null) 

async function getQuery() {
  let qryId = route.params. id;
  id.value=qryId;
  movies.value = [];
  characters.value = [];
  users.value = [];

  let qry = null;
  if (qryId == 1) {
    title.value = "To show all conan the movies.";
    const queryRef = collection(db, "movies");
    qry = query(queryRef);
    loadComponent.value="Movies"


  } else if (qryId == 2) {
    title.value = "To show conan the movies that stars more than 7.12 scores.";
    const queryRef = collection(db, "movies");
    qry = query(queryRef, where("stars", ">", 7.12));   
    loadComponent.value="Movies"

  } else if (qryId == 3) {
    title.value = "To show conan the movies that have actor/actress(totalCharacters) more than 5.";
    const queryRef = collection(db, "movies");
    qry = query(queryRef, where("totalCharacter", ">", 5));   
    loadComponent.value="Movies"

  } else if (qryId == 4) {
    title.value = "To show users who like charactor name 'Akai Shuichi'.";
    const queryRef = collection(db, "users");
    qry = query(queryRef,where("favoriteCharacters","array-contain","Akai Shuichi"));
    loadComponent.value="Movies"

  } else if (qryId == 5) {
    title.value = "To show users who age more than 17 and like conan the movies 7.";
    const queryRef = collection(db, "users");
    qry = query(queryRef,where("age", ">", 17), where("favoriteMovies","array-contain","conan the movies 7"));

  } else if (qryId == 6) {
    title.value = "To show characters who is a male arrange by young to old.";
    const queryRef = collection(db, "characters");
    qry = query(queryRef, where("gender", "==", "male"),orderBy("age","asc"),limit(10));

  } else if (qryId == 7) {
    title.value = "To show characters who is a good.";
    const queryRef = collection(db, "characters");
    qry = query(queryRef, where());

  } else if (qryId == 8) {
    title.value = "To show the average score of conan the movies that contains drama in category.";
    const queryRef = collection(db, "zips");
    qry = query(queryRef, or(where("state", "==", "DC"), where("pop", ">", 100000)));
    const snapshot = await getCountFromServer(qry)
    count.value=snapshot.data().count

  }else if (qryId == 9) {
    title.value = "To count user who like charactor name 'Kudo Shinichi'.";
    const queryRef = collection(db, "zips");
    qry = query(queryRef,where("state", "==", "DC"));
    const snapshot = await getAggregateFromServer(qry,{
      totalPopulation: sum('pop')
    })
    count.value=snapshot.data().totalPopulation

  }else if (qryId == 10) {
    title.value = "To sum the total views since conan the movie 1 - present.";
    const queryRef = collection(db, "zips");
    qry = query(queryRef,where("state", "==", "NY"));
    const snapshot = await getAggregateFromServer(qry,{
      averagePopulation: average('pop')
    })
    count.value=snapshot.data().averagePopulation

  }

  const querySnap = await getDocs(qry);
  querySnap.forEach((doc) => {
    let data = doc.data();
    data.id = doc.id;
    if(loadComponent.value==="Movies"){
    movies.value.push(data);
    }else if(loadComponent.value==="Characters"){
    characters.value.push(data);
    }else if(loadComponent.value==="Users"){
    users.value.push(data);
    }
    console.log(loadComponent.value)

  });
}

watch(() => route.params.id, getQuery);

onMounted(() => {
  getQuery();
});
</script>
<template>
  <MovieItem :title="title" :data="movies" v-if="loadComponent=='Movies'" />
  <CharacterItem :title="title" :data="characters" v-if="loadComponent=='Characters'" />
  <UserItem :title="title" :data="users" v-if="loadComponent=='Users'" />
  <Aggreate :title="title" :data="count" v-if="loadComponent=='Aggreate'" />
</template>

<style></style>
