<template>
  <div>
    <div class="containerShow">
      <div class="BigImg">
        <img
          :src="require('@/assets/' + imgActive)"
          alt="Active_img"
          @click="changeStateOfModal()"
        />
      </div>
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
    <div class="modalContainer" v-if="displayModal">
      <div class="BigImgModal">
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-chevron-right"></i>
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
      border-radius: 10px;
    }
    .BigImg {
      height: 100%;
      img {
        height: 50vh;
      }
    }
  }
  .imgsMiniature {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    img:hover {
      opacity: 0.6;
    }
    img {
      height: 100px;
      width: 100px;
    }

    .imgActive {
      opacity: 0.5;
      border: 2px solid green;
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
      border: 2px solid red;
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
      .fa-chevron-right:hover,.fa-xmark {
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
          background-color: black;
        }
      }
    }
  }
}
</style>
