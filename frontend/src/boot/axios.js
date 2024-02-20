import axios from 'axios'
import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({app}/* { app, router, ... } */) => {
  // something to do

  const fakestoreapi  = axios.create(
    {
      baseURL: "https://fakestoreapi.com"
    }
  );

  app.provide("fakestoreapi",fakestoreapi)





})
