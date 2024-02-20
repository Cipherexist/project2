import { boot } from 'quasar/wrappers'
import { reactive } from 'vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({app}/* { app, router, ... } */) => {
  // something to do


  const $store = reactive(
    {
      product: [],
      cart: [],
      totalprice: 0
    }
  )

  app.provide("$store",$store)






})
