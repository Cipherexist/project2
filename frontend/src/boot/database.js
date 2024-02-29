import axios from 'axios'
import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({app}/* { app, router, ... } */) => {
  // something to do
  let result

  axios.get('http://192.168.1.20:8080/products')
  .then(function (response) {
    // handle success
    result = response
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  app.provide("$productlist",result)





})
