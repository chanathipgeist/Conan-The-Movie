<script setup>
import { ref, onMounted, watch } from "vue";
import { collection, query, where, getDocs, limit,or,average,orderBy, getCountFromServer,getAggregateFromServer, sum } from "firebase/firestore";
import db from "../firebase/init.js";
import Documents from "../components/Documents.vue";
import { useRoute } from "vue-router";

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
    title.value = "Cities with population > 100000";
    const zipsRef = collection(db, "movies");
    console.log(zipsRef)
    qry = query(zipsRef, where("category","==","Electronics"));
    loadComponent.value="Document"


  } else if (qryId == 2) {
    title.value = "Cities in New York";
    const zipsRef = collection(db, "zips");
    qry = query(zipsRef, where("state", "==", "NY"), limit(10));
    loadComponent.value="Zips"
    console.log(loadComponent.value)
  } else if (qryId == 3) {
    title.value = "List zips in DC with population > 40000";
    const zipsRef = collection(db, "zips");
    qry = query(zipsRef,where("state", "==", "DC"),where("pop", ">", 40000),limit(10));
  } else if (qryId == 4) {
    title.value = "List zips in NY or in DC with population > 60000";
    const zipsRef = collection(db, "zips");
    qry = query(zipsRef,where("state", "in",["DC","NY"]),where("pop", ">", 60000),limit(10));
  } else if (qryId == 5) {
    title.value = "List zips in DC or cities with population > 100000";
    const zipsRef = collection(db, "zips");
    qry = query(zipsRef, or(where("state", "==", "DC"), where("pop", ">", 100000)), limit(10));
  } else if (qryId == 6) {
    title.value = "List zips in DC and sort the data by population";
    const zipsRef = collection(db, "zips");
    qry = query(zipsRef, where("state", "==", "DC"),orderBy("pop","asc"),limit(10));
  } else if (qryId == 7) {
    title.value = "List zips latitude between 71 and 73";
    const zipsRef = collection(db, "zips");
    qry = query(zipsRef, where("loc.x", ">", 71),where("loc.x", "<", 73), limit(10));
  } else if (qryId == 8) {
    title.value = "Count zips in DC or cities with population > 100000";
    const zipsRef = collection(db, "zips");
    qry = query(zipsRef, or(where("state", "==", "DC"), where("pop", ">", 100000)));
    const snapshot = await getCountFromServer(qry)
    count.value=snapshot.data().count

  }else if (qryId == 9) {
    title.value = "Show the total population in DC (state)";
    const zipsRef = collection(db, "zips");
    qry = query(zipsRef,where("state", "==", "DC"));
    const snapshot = await getAggregateFromServer(qry,{
      totalPopulation: sum('pop')
    })
    count.value=snapshot.data().totalPopulation

  }else if (qryId == 10) {
    title.value = "Show the average population in NY (state)";
    const zipsRef = collection(db, "zips");
    qry = query(zipsRef,where("state", "==", "NY"));
    const snapshot = await getAggregateFromServer(qry,{
      averagePopulation: average('pop')
    })
    count.value=snapshot.data().averagePopulation

  }

  const querySnap = await getDocs(qry);
  querySnap.forEach((doc) => {
    let data = doc.data();
    data.id = doc.id;
    if(loadComponent.value==="Document"){
    movies.value.push(data);
    }else if(loadComponent.value==="Document"){
    characters.value.push(data);
    }else if(loadComponent.value==="Document"){
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
  <Documents :title="title" :data="movies" v-if="loadComponent=='Document'" />
</template>

<style></style>
