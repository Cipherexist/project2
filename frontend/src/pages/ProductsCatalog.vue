<style scoped>

.my-card
{
  max-width: 450px;
  height: 450px;
}
.img
{
  margin-top: 20px;
  max-width: 150px;
  height: 150px;
}

.whole-card
{
  max-height: 90vh;
  width: 90vh
}

</style>


<template>


<q-layout>
  <q-page-container>
      <div class="q-pa-lg">
          <div class="row">
            <h4>PRODUCT CATALOG</h4>
          </div>
          <div class="row">
            <q-input bg-color="white" outlined  label-color="black" v-model="component.searchbox" label="Search here" @change="showlogs" />
          </div>

          <div class="row">


              <div class="q-pa-md q-gutter-md" v-for="(item) in store.products" :key="item.id + 'products/'">
                <!-- {{ component.searchtext = item.title }} -->
                <div class="col-2" v-if="component.searchbox==''">

                    <ProductCard
                      :obj="item"
                      :id="item.id"
                      :name="item.title"
                      :rating="item.rating.rate"
                      :price="item.price"
                      :description="item.description"
                      :image="item.image"
                      @-clickaddtocart="Savetocart"/>
                  </div>

                  <div class="col-2" v-else-if="item.title.toLowerCase().includes(component.searchbox.toLowerCase())">
                      <ProductCard
                       :obj="item"
                      :id="item.id"
                      :name="item.title"
                      :rating="item.rating.rate"
                      :price="item.price"
                      :description="item.description"
                      :image="item.image"
                      @-clickaddtocart="Savetocart"/>
                  </div>
              </div>
          </div>

      </div>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="shopping_cart" color="positive" @click="viewcart = true">
              <q-badge color="red" floating>{{ store.cart.length }}</q-badge>
            </q-btn>
      </q-page-sticky>
  </q-page-container>
</q-layout>

<q-dialog v-model="viewproduct">
  <q-card class="my-card">
    <div class="q-pa-md ">
      <q-img class="img" :src="component.popupimage" fit="fill" />


    </div>
    <q-card-section>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             {{ component.popuptitle }}
            </div>

          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
           ${{ component.popupprice }}
          </div>
          <div class="text-caption text-grey">
            {{ component.popupdescription }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Add to Cart" round icon="shopping_cart" @click="addtocart"/>
        </q-card-actions>
      </q-card>
</q-dialog>


<q-dialog v-model="viewcart">
      <q-card class="whole-card">
        <q-card-section>
          <div class="text-h6">My Cart</div>
        </q-card-section>

        <q-separator />

        <q-card-section class="scroll">

          <!-- ADD HERE -->
          <div class="q-pa-md q-gutter-md">
            <div v-for="(item,i) in store.cart" :key="i+ 'cart'">
              <ProductItem
              :title="item.title"
              :description="item.description"
              :image = "item.image"
              :price = "item.price"
              />

            </div>
          </div>

        </q-card-section>

      <q-card-section>
        <div class="text-subtitle1 q-ma-md">
          TOTAL: ${{ store.totalprice }}
         </div>
      </q-card-section>
        <q-card-actions align="right">

         <q-btn flat label="Close" color="primary" v-close-popup />
         <q-btn flat label="Check-Out" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
</q-dialog>








</template>





<script setup>

const containstxt = computed(()=>{ return component.searchbox.contains(component.searchtext)})
function showlogs()
{
  console.log("Show Logs", component.searchbox)

}


function Savetocart(data)
{
  component.popuptitle = data.name
  component.popupimage = data.image
  component.popupprice = data.price
  component.popupdescription = data.description
  component.popobj = data.obj
  viewproduct.value = true
  //console.log("SERVER ID",data.id)
  //console.log("SERVER NAME",data.name)
 // console.log("SERVER OBJ",component.popobj)
}

function addtocart()
{
//  console.log(component.popobj)
  store.cart.push({...component.popobj})

  console.log(store.cart)
}




import ProductCard from "components/ProductsCard.vue"
import ProductItem from "components/ProductsItem.vue"

import {computed, inject, onMounted, reactive, ref } from "vue";




const viewproduct = ref(false)
const viewcart = ref(false)


const component = reactive
(
  {
    searchbox: "",
    searchtext: "",
    popuptitle: "",
    popupdescription: "",
    popupimage: "",
    popupprice: "",
    popobj: []
  }

)



// let products = ref([])


const fakecart = inject("fakestoreapi")

const store = inject("$store")




onMounted(async ()=>
{
  const result = await fakecart.get("/products")
  console.log("MY PRODUCTS",result.data)

  store.products = result.data
})



</script>
