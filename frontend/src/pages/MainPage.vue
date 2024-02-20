<style scoped>
 h3 {
    color:pink;
 }
 .box
 {
    display: flex;
    justify-content: center;
 }
 div > .searchbox
 {
   outline-offset: 10px;
   outline-color: gray;
   outline-width: 1px;
   outline-style:groove;
   height: 50px;
width: auto;
 }





</style>


<template>
        <!-- <div>
            <div class="box">
                <h3 >TODOS</h3>
            </div>
            <div class="box">
                <div class="container ">
                    <q-form>
                      <q-input standout="bg-primary text-white" v-model="text" label="What needs to be done" style="width: 400px;"/>
                    </q-form>

                    </div>
                </div>
        </div> -->


<br/>
<label for="1">Number  </label>
<input id="1" type="number" v-model="num1">
<br/>
<input type="number" v-model="num2">
<br/>
<input type="number" v-model="obj.num1">
.<br/>
<input type="number" v-model="obj.num2">

<br/>
{{ obj.num2 }}

<h4 v-if="answer2 > 10">More than 1280</h4>


</template>




<script setup>
import { reactive, ref, computed} from 'vue';


const batchno = ref(40)
let num1 = ref(0)
let num2 = ref(1)

const answer = computed(() => {
    return (num1.value + num2.value)
})

const obj = reactive(
    {
        num1: 0,
        num2: 0
    })


const answer2= computed(() => {
    return (obj.num1 + obj.num2)
})

// setInterval(() => {
//     batchno.value ++
// }, 1000);




</script>
