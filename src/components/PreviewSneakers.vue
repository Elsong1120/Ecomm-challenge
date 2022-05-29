<template>
  <div class="containerShow">
    <div class="BigImg">
      <img :src="require('@/assets/' + imgActive)" alt="Active_img" />
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
</template>

<script>
export default {
  data() {
    return {
      indexImgActive: 0,
      tabBigImg:["image-product-1.jpg","image-product-2.jpg","image-product-3.jpg","image-product-4.jpg"],
    

      tabImgThumbnail: [
        { url: "image-product-1-thumbnail.jpg", active: true },
        { url: "image-product-2-thumbnail.jpg", active: false },
        { url: "image-product-3-thumbnail.jpg", active: false },
        { url: "image-product-4-thumbnail.jpg", active: false },
      ],
      
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

    
  },

  computed: {
    imgActive() {
      return this.tabBigImg[this.indexImgActive];
    },
  },
};
</script>

<style lang="scss">
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
  .imgsMiniature {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    img:hover{
          cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAf4AAAPVAAAH1QAAB9WAAA3VgAAd/4AAGbaAAAG2gAABtgAAAYAAAAGAAAABgAAAAYAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gD///4A///8AP//+AB///AAf//wAD//4AA//8AAP//AAD//5AA///wAf//8Af///D////w////8P////n///8="),
            auto;
            opacity:0.6;
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
}
</style>
