
<style scoped>

.my-card
{
  max-width: 80vw;
  width: 450px;
  max-height: auto;

}

.imgitem
{
  max-width: 380px;
  height: 220px;
  object-fit: scale-down;
}


</style>

<script setup>


import { inject} from "vue"


const $store = inject("$store")



const props = defineProps(
  {
    title:
    {
      required: true,
      type: String
    },
    description:
    {
      required: true,
      type: String
    },
    image:
    {
      required: true,
      type: String
    },
    price:
    {
      required: true,
      type: Number
    }
  })


  $store.totalprice =  $store.totalprice + props.price



</script>

<template>

    <!-- <q-card class="my-card">
          <q-img class="imgitem" :src="props.image" fit="fill">
            <div class="absolute-bottom text-h6">
              {{ props.title }}
            </div>
          </q-img>

          <q-card-section>
            <div class="text-subtitle1-sm">
            {{ props.description }}
            </div>

          </q-card-section>

          <q-card-section>
            <div class="text-subtitle1">
            ${{ props.price }}
            </div>

          </q-card-section>
    </q-card> -->


    <q-card class="" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">For Checkout</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ props.title}}</div>
          <div class="text-caption text-grey">
            {{ props.description  }}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            :src="props.image"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <div class="text-subtitle1">
          ${{ props.price }}
        </div>
      </q-card-actions>
    </q-card>







</template>
