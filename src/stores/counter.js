import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    tabItems: useStorage ('tabItems',[
      {
        name: "Fall Limited Edition Sneakers",
        quantityChosen: 0,
        orginalPrice: 250,
        discountPrice: 125,
        urlImgMin: "image-product-1-thumbnail.jpg",
      },
    ]),
    currentQuantityChosen:useStorage ('currentQuantityChosen', 0),
    currentItemsCart: useStorage ('currentItemsCart',[]),
    displayCart: useStorage ('displayCart',false),
    displaySideBar:useStorage ( 'displaySideBar',false),
    currentDispalyItemIndex:useStorage ('currentDispalyItemIndex', 0),
    indexImgActive: useStorage ('indexImgActive',0),

    tabBigImg:useStorage ('tabBigImg', [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ]),

    tabImgThumbnail:useStorage ('tabImgThumbnail', [
      { url: "image-product-1-thumbnail.jpg", active: true },
      { url: "image-product-2-thumbnail.jpg", active: false },
      { url: "image-product-3-thumbnail.jpg", active: false },
      { url: "image-product-4-thumbnail.jpg", active: false },
    ]),

    modalImgs: useStorage ('modalImgs',{
      indexImgActiveModal: 0,
      tabBigImg: [
        "image-product-1.jpg",
        "image-product-2.jpg",
        "image-product-3.jpg",
        "image-product-4.jpg",
      ],

      tabImgThumbnail: [
        { url: "image-product-1-thumbnail.jpg", active: true },
        { url: "image-product-2-thumbnail.jpg", active: false },
        { url: "image-product-3-thumbnail.jpg", active: false },
        { url: "image-product-4-thumbnail.jpg", active: false },
      ],
    }),

    displayModal:useStorage ('displayModal', false),
  }),
  

  actions: {
    // const storeCounter = useCounterStore()
  },
});

