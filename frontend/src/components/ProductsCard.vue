
<script setup>
import { computed, ref, inject } from 'vue';

const $store = inject("$store")


const props = defineProps(
  {
    obj:
    {
      type: Object
    },
    id:
    {
      required: true,
      type: String
    },
    name:
    {
      required: true,
      type: String
    },
    rating:
    {
      required: true,
      type: Number
    },
    price:
    {
      required: true,
      type: Number
    },
    image:
    {
      required: true,
      type: String
    },
    description:
    {
      required: true,
      type: String
    },


  })

  function addtocart(id,name,image,price,description,obj)
  {
   //  console.log("MYPRODUCTID", name)

    $imits('clickaddtocart',{id,name,image,price,description,obj})
   // $store.cart.push({...props.obj})

   // console.log("LENGHTS", obj)
  }

  const $imits = defineEmits(['clickaddtocart'])



</script>


<style scoped>
.my-card
{
  max-width: 300px;
  width: 250px;
  max-height: 350px;
}

.img
{
  max-width: 180px;
  height: 220px;
  object-fit: scale-down;
}
</style>


<template>

<q-card class="my-card" flat bordered>
      <!-- <q-img  :fit="fill"/> -->
      <div class="q-pa-md">
          <q-img class="img" :src="props.image" fit="fill">
              <div class="absolute-bottom text-subtitle6 text-center">
                {{props.name}}
              </div>
          </q-img>
      </div>

      <q-card-section>
        <q-btn

          fab
          @click="addtocart(props.id,props.name,props.image,props.price,props.description,props.obj)"
          color="primary"
          icon="shopping_cart"
          class="absolute"
          style="top: 0; right: 10px; transform: translateY(-50%);"
        />

        <!-- <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{props.name}}
          </div>

        </div> -->

        <q-rating v-model="ratingModel" :model-value="props.rating" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          ${{ props.price }}
        </div>

      </q-card-section>

      <q-separator />

      <!-- <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions> -->
    </q-card>

</template>
