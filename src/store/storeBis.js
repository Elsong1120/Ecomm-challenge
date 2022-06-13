// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore({
//   id: 'counter',
//   state: () => ({
//     counter: 0
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2
//   },
//   actions: {
//     increment() {
//       this.counter++
//     }
//   }
// })


// import Vue from "vue";
// import Vuex from "vuex";
// import { getField, updateField } from "vuex-map-fields";
// import createPersistedState from "vuex-persistedstate";
// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     tabItems: [
//       {
//         name: "Fall Limited Edition Sneakers",
//         quantityChosen: 0,
//         orginalPrice: 250,
//         discountPrice: 125,
//         urlImgMin: "image-product-1-thumbnail.jpg",
//       },
//     ],
//     currentQuantityChosen: 0,
//     currentItemsCart: [],
//     displayCart: false,
//     displaySideBar: false,
//     currentDispalyItemIndex: 0,
//     indexImgActive: 0,

//     tabBigImg: [
//       "image-product-1.jpg",
//       "image-product-2.jpg",
//       "image-product-3.jpg",
//       "image-product-4.jpg",
//     ],

//     tabImgThumbnail: [
//       { url: "image-product-1-thumbnail.jpg", active: true },
//       { url: "image-product-2-thumbnail.jpg", active: false },
//       { url: "image-product-3-thumbnail.jpg", active: false },
//       { url: "image-product-4-thumbnail.jpg", active: false },
//     ],

//     modalImgs: {
//       indexImgActiveModal: 0,
//       tabBigImg: [
//         "image-product-1.jpg",
//         "image-product-2.jpg",
//         "image-product-3.jpg",
//         "image-product-4.jpg",
//       ],

//       tabImgThumbnail: [
//         { url: "image-product-1-thumbnail.jpg", active: true },
//         { url: "image-product-2-thumbnail.jpg", active: false },
//         { url: "image-product-3-thumbnail.jpg", active: false },
//         { url: "image-product-4-thumbnail.jpg", active: false },
//       ],
//     },

//     displayModal: false,
//   },
//   getters: {
//     // Add the `getField` getter to the
//     // `getters` of your Vuex store instance.
//     getField,
//   },
//   mutations: {
//     // Add the `updateField` mutation to the
//     // `mutations` of your Vuex store instance.
//     updateField,
//   },

//   plugins: [
//     createPersistedState({
//       paths: [
//         "tabItems",
//         "currentQuantityChosen",
//         "currentItemsCart",
//         "displayCart",
//         "displaySideBar",
//         "currentDispalyItemIndex",
//         "indexImgActive",
//         "tabBigImg",
//         "tabImgThumbnail",
//         "modalImgs",
//         "displayModal",
//       ],
//     }),
//   ],
// });
