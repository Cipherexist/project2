<style>

div {
  color:blue
}
</style>


<template>

  <MyHeader/>
  <div class="q-pa-lg" style="width: auto;">
    <div class="bg-dark q-pa-lg" style="width: 300px;">

        <input type="number" v-model="num.slot1">
        <p>NUMBER 2</p>
        <input type="number" v-model="num.slot2">
        <br><br>
        <q-btn color="deep-orange" text-color="white" size="lg" label="Standard"  @click="computeresult"/>
        <q-btn class="row q-mt-sm" color="positive" text-color="white" size="md" label="Standard"  @click="routenext"/>

     </div>



</div>
<p>NUMBER 1</p>



<h4>{{ if1 }}</h4>

<ul>
  <li v-for="(item, i) in cars" :key="i+'cars'">
    Maker: {{ item.make  }} on year {{ item.year }}
   </li>
</ul>


</template>

<script setup>
import router from 'src/router';
import {computed, reactive, ref } from 'vue';
import MyHeader from "components/MyHeader.vue"

function routenext()
{
  router.replace({ path: '/Product' })
}

let changeble = ref(0)

const num = reactive(
  {
    slot1: 0,
    slot2: 0
  })
const  computeresult = ref(0)

const if1 = computed(()=> changeble.value>10 ? changeble.value + " is More than 10" : changeble.value + " is Lowers than 10")

const cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2022
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2021
  },
  {
    make: "Ford",
    model: "F-150",
    year: 2020
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2019
  },
  {
    make: "Volkswagen",
    model: "Jetta",
    year: 2018
  },
  {
    make: "Chevrolet",
    model: "Silverado",
    year: 2017
  },
  {
    make: "Nissan",
    model: "Altima",
    year: 2016
  },
  {
    make: "Dodge",
    model: "Ram 1500",
    year: 2015
  },
  {
    make: "Jeep",
    model: "Wrangler",
    year: 2014
  },
  {
    make: "Chrysler",
    model: "300",
    year: 2013
  }
]


</script>


