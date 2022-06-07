<template>
  <div>
    <div class="containerShow">
      <div class="BigImg">
        <i class="fa-solid fa-chevron-left" @click="slideImgMotion(-1)"></i>
        <i class="fa-solid fa-chevron-right" @click="slideImgMotion(1)"></i>
        <img
          :src="require('@/assets/' + imgActive)"
          alt="Active_img"
          @click="changeStateOfModal()"
        />
      </div>
      <div class="imgsMiniature">
        <div
          v-for="(objImg, index) in tabImgThumbnail"
          :key="index"
          @click="getIndexActiveImg(index)"
          :class="{ imgActive: objImg.active }"
        >
          <img
            :src="require('@/assets/' + objImg.url)"
            :alt="'img-product' + index"
          />
        </div>
      </div>
    </div>
    <div class="modalContainer" v-if="displayModal">
      <div class="BigImgModal">
        <i class="fa-solid fa-xmark" @click="hideModal()"></i>
        <i class="fa-solid fa-chevron-left" @click="slideImgMotion(-1)"></i>
        <i class="fa-solid fa-chevron-right" @click="slideImgMotion(1)"></i>
        <img :src="require('@/assets/' + imgActive)" alt="Active_img" />
        <div class="imgsMiniature">
          <img
            v-for="(objImg, index) in tabImgThumbnail"
            :src="require('@/assets/' + objImg.url)"
            :alt="'img-product' + index"
            :key="index"
            @click="getIndexActiveImg(index)"
            :class="{ imgActive: objImg.active }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexImgActive: 0,
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

      displayModal: false,
    };
  },
  methods: {
    getIndexActiveImg(index) {
      this.indexImgActive = index;
      this.tabImgThumbnail[index].active = true;
      for (let i = 0; i < this.tabImgThumbnail.length; i++) {
        if (i != index) this.tabImgThumbnail[i].active = false;
      }
    },
    changeStateOfModal() {
      this.displayModal = true;
    },

    hideModal() {
      this.displayModal = false;
    },

    slideImgMotion(unit) {
      if (
        (unit < 0 && this.indexImgActive >= 1) ||
        (unit > 0 && this.indexImgActive < this.tabImgThumbnail.length - 1)
      ) {
        this.indexImgActive += unit;
        this.getIndexActiveImg(this.indexImgActive);
      }
    },
  },

  computed: {
    imgActive() {
      return this.tabBigImg[this.indexImgActive];
    },
  },
};
</script>

<style lang="scss">
div {
  img:hover {
    cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAf4AAAPVAAAH1QAAB9WAAA3VgAAd/4AAGbaAAAG2gAABtgAAAYAAAAGAAAABgAAAAYAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gD///4A///8AP//+AB///AAf//wAD//4AA//8AAP//AAD//5AA///wAf//8Af///D////w////8P////n///8="),
      auto;
  }
  .containerShow {
    img {
      border-radius: 8px;
    }
    .BigImg {
      height: 100%;

      .fa-chevron-left,
      .fa-chevron-right {
        display: none;
      }
      img {
        height: 50vh;
        width: 80%;
      }
    }
  }
  .imgsMiniature {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 10px 0;
    div {
      min-height: 70px;
      min-width: 70px;
      height: 7vw;
      width: 7vw;
      //   border: 2px solid orange;
      border-radius: 10px;

      img:hover {
        opacity: 0.8;
        filter: brightness(1.45);
      }
      img {
        min-height: 70px;
        min-width: 70px;
        height: 7vw;
        width: 7vw;
        object-fit: cover;
        padding: 0;
        margin: 0;
        mix-blend-mode: luminosity;
      }
    }
    .imgActive {
      opacity: 0.8;
      filter: brightness(1.45);
      background-color: rgb(233, 109, 20);

      border: 3px solid rgb(233, 109, 20);
      padding: 0;
    }
  }
  .modalContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 98vh;
    top: 0;
    left: 0;
    width: 98vw;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;

    .BigImgModal {
      //   border: 2px solid red;
      height: 80%;
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      .fa-xmark {
        position: absolute;
        top: -5%;
        right: 10%;
        color: rgb(234, 131, 56);
        font-weight: bold;
        font-size: 1.5vw;
      }
      .fa-chevron-left:hover,
      .fa-chevron-right:hover,
      .fa-xmark {
        cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAf4AAAPVAAAH1QAAB9WAAA3VgAAd/4AAGbaAAAG2gAABtgAAAYAAAAGAAAABgAAAAYAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gD///4A///8AP//+AB///AAf//wAD//4AA//8AAP//AAD//5AA///wAf//8Af///D////w////8P////n///8="),
          auto;
      }
      .fa-chevron-left,
      .fa-chevron-right {
        position: absolute;
        top: 40%;
        background-color: white;
        padding: 0.8em;
        font-size: 1vw;
        border-radius: 50%;
        font-weight: bold;
      }
      .fa-chevron-left {
        left: 5%;
      }
      .fa-chevron-right {
        right: 5%;
      }

      img {
        height: 80%;
        width: 85%;
        border-radius: 15px;
      }

      .imgsMiniature {
        width: 80%;
        padding: 1vw;
        img {
          height: 80px;
          width: 80px;
          //   background-color: black;
        }
      }
    }
  }
}

@media (max-width: 731px) {
  #app {
    height: 95vh;
    width: 95vw;
    overflow-x: hidden;
    overflow-y: scroll;
    .responsiveSideBar,
    .bg-black_SideBar {
      display: initial !important;
    }

    .bg-black_SideBar {
      background-color: rgba(0, 0, 0, 0.7);
      height: 98vh;
      width: 98vw;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      .sideBar {
        height: 100%;
        width: 70vw;
        position: absolute;
        top: 0;
        left: 0;

        background-color: white;
        z-index: 2;
        //   border: solid red;
        i {
          font-size: 6vw;
          font-weight: bold;
          padding-bottom: 50px;
          // position: absolute;
          // top:2vh;
          // left: 10px;
        }
        i:hover {
          cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAf4AAAPVAAAH1QAAB9WAAA3VgAAd/4AAGbaAAAG2gAABtgAAAYAAAAGAAAABgAAAAYAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gD///4A///8AP//+AB///AAf//wAD//4AA//8AAP//AAD//5AA///wAf//8Af///D////w////8P////n///8="),
            auto;
        }
        ul {
          //   border: solid green;
          display: flex;
          flex-direction: column;
          list-style-type: none;
          justify-content: flex-start;
          align-items: start;
          //   margin-top: 70px;
          li {
            margin: 10px 0;
            font-weight: bold;
            font-size: 4vw;
          }
        }
      }
    }
    .containerCart {
      height: fit-content;
      min-height: 30vh;
      width: 50vw !important;
      top: 15vh !important;
      right: 12vw;
      .titleCart {
        padding-left: 10px;
      }
      .titleCart,
      .emptyCartMsg {
        font-size: 3.5vw;
      }

      .detailsCartContainer {
        .detailsItem {
          img {
            min-height: 100px;
            min-width: 100px;
            height: 2.5vw !important ;
            width: 2.5vw !important ;
          }

          .nameItem,
          .priceCalcul {
            font-size: 3vw !important;
          }
          i {
            font-size: 4vw !important;
          }
        }
        button {
          margin-bottom: 20px !important;
          font-size: 3.5vw !important;
        }
      }
    }
    header {
      justify-content: flex-start !important;
      margin-bottom: 15vh !important;
      margin-top: 10vh !important;
      .responsiveSideBar {
        display: flex !important;
        justify-content: center;
        align-items: center;
        width: 20%;
        i {
          font-size: 5vw;
          font-weight: bolder !important;
        }
        i:hover {
          cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAf4AAAPVAAAH1QAAB9WAAA3VgAAd/4AAGbaAAAG2gAABtgAAAYAAAAGAAAABgAAAAYAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gD///4A///8AP//+AB///AAf//wAD//4AA//8AAP//AAD//5AA///wAf//8Af///D////w////8P////n///8="),
            auto;
        }
      }
      nav {
        // visibility: hidden;
        display: none !important;
      }
      .logo {
        // border: solid red;
        width: fit-content !important;
        font-size: 8vw !important;
      }

      .container-avatar {
        width: 100% !important;
        i {
          font-size: 5.5vw !important;
          .iconNotification {
            font-size: 1.5vw !important;
          }
        }
        img {
          width: 9vw !important;
        }
      }
    }
    .mainContent {
      flex-direction: column;
      //   border: solid blue;

      .slideShowContainer {
        // border: solid green;
        width: 95vw !important;

        .containerShow {
          display: flex;
          justify-content: center;
          //   border: solid gray;
          height: 40vh;
          .BigImg {
            // border: solid red;
            width: 60%;
            // margin-top: 30px;
            position: relative;
            img {
              width: 100%;
              height: 100% !important;
            }
            i {
              display: initial;
              position: absolute;
              top: 40%;
              background-color: white;
              padding: 0.8em;
              font-size: 3vw;
              border-radius: 50%;
              font-weight: bolder;
            }
            .fa-chevron-left {
              left: 5%;
            }
            .fa-chevron-right {
              right: 5%;
            }
            .fa-chevron-left,
            .fa-chevron-right:hover {
              cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAf4AAAPVAAAH1QAAB9WAAA3VgAAd/4AAGbaAAAG2gAABtgAAAYAAAAGAAAABgAAAAYAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gD///4A///8AP//+AB///AAf//wAD//4AA//8AAP//AAD//5AA///wAf//8Af///D////w////8P////n///8="),
                auto;
            }
          }
          .imgsMiniature {
            display: none;
          }
        }
        .modalContainer {
          display: none !important;
        }
      }
      .detailsCommand {
        // border: solid green;
        height: 100% !important;
        width: 90% !important;
        align-items: flex-start !important;
        padding: 20px !important;
        .detailsMainContainer {
          height: 95% !important;
          width: 95% !important;
          .nameCompany {
            font-size: 3vw !important;
          }
          h2 {
            font-size: 5vw !important;
          }
          .descriptionSneakers {
            font-size: 3vw !important;
          }
          .containerPrice {
            .price,
            .discount {
              font-size: 3vw !important;
            }
          }
          .originalPrice {
            font-size: 2.5vw !important;
          }
          .quantityContainer {
            .quantity {
              display: flex;
              justify-content: space-evenly;
              width: 35%;
              background-color: rgb(247, 248, 258);
              border-radius: 5px;
              padding: 0.6em;
              border-radius: 7px;
              .minus,
              .plus {
                color: rgb(234, 131, 56);
                i {
                  font-size: 3.5vw !important            ;
                }
              }

              .number {
                font-size: 3.5vw !important;
              }
            }

            .containerAddCart {
              div {
                font-size: 3.5vw;
                i {
                  padding-right: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
}
#app::-webkit-scrollbar {
  display: none;
}

@media (max-width: 471px) {
  #app {
    .mainContent {
      .slideShowContainer {
        .BigImg {
          border: solid yellow;
          margin: 0 auto !important;
          width: 95% !important;
        }
      }
      .detailsCommand {
        .detailsMainContainer {
          .quantityContainer,
          .containerAddCart {
            padding: 1.5em 0 !important;
          }
          .quantityContainer {
            flex-direction: column;
            .quantity {
              width: 95% !important;
            }
          }
          .containerAddCart {
            width: 100% !important;
            margin-top:15px;
          }
        }
      }
    }
  }
}
</style>
