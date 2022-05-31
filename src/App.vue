<template>
  <div id="App">
    <header>
      <div class="responsiveBar">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div class="logo">
        <span>sneakers</span>
      </div>
      <nav>
        <ul class="nav-list">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div class="container-avatar">
        <i class="fa-solid fa-cart-shopping" @click="ChangeStateOfCart()"
          ><span v-if="nbItemsCart > 0" class="iconNotification">{{
            nbItemsCart
          }}</span></i
        >
        <!-- <font-awesome-icon icon="fa-cart-shopping" /> -->
        <img src="../src/assets/image-avatar.png" alt="avatar" />
      </div>
    </header>

    <div class="mainContent">
      <div class="slideShowContainer">
        <PreviewSneakers />
      </div>

      <div class="detailsCommand">
        <div class="detailsMainContainer">
          <p class="nameCompany">sneaker company</p>
          <h2 class="chosenSneakers">Fall Limited Edition Sneakers</h2>

          <p class="descriptionSneakers">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div class="containerPrice">
            <span class="price">$125.00</span> <span class="discount">50%</span>
          </div>
          <p class="originalPrice">$250.00</p>

          <div class="quantityContainer">
            <div class="quantity">
              <span class="minus" @click="decrement()"
                ><i class="fa-solid fa-minus"></i></span
              ><span class="number">{{ currentQuantityChosen }}</span
              ><span class="plus" @click="increment()"
                ><i class="fa-solid fa-plus"></i
              ></span>
            </div>
            <div class="containerAddCart" @click="addItemsToCart()">
              <div>
                <i class="fa-solid fa-cart-shopping"></i>
                <span>Add to cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="displayCart" class="containerCart">
      <p class="titleCart">Cart</p>
      <div v-if="!cartIsEmpty" class="emptyCartMsg">
        <p>Your cart is empty.</p>
      </div>
      <div v-else class="detailsCartContainer">
        <div
          class="detailsItem"
          v-for="(item, index) in currentItemsCart"
          :key="index"
        >
          <img
            :src="require('@/assets/' + item.urlImgMin)"
            alt=""
            class="imgCart"
          />
          <div>
            <p class="nameItem">{{ item.name }}</p>
            <p class="priceCalcul">
              <span class="priceItem"
                >${{
                  item.discountPrice ? item.discountPrice : item.originalPrice
                }}.00 x {{ item.quantityChosen }}</span
              >

              <span class="totalAmount"
                >${{
                  item.discountPrice
                    ? item.discountPrice * item.quantityChosen
                    : item.originalPrice * item.quantityChosen
                }}.00</span
              >
            </p>
          </div>
          <span @click="removeItemCart(index)"
            ><i class="fa-solid fa-trash-can"></i
          ></span>
        </div>
        <button class="btnCheckout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewSneakers from "./components/PreviewSneakers.vue";
export default {
  name: "App",
  components: {
    PreviewSneakers,
  },

  data() {
    return {
      tabItems: [
        {
          name: "Fall Limited Edition Sneakers",
          quantityChosen: 0,
          orginalPrice: 250,
          discountPrice: 125,
          urlImgMin: "image-product-1-thumbnail.jpg",
        },
      ],
      currentItemsCart: [],
      displayCart: false,
      currentDispalyItemIndex: 0,
    };
  },

  computed: {
    cartIsEmpty() {
      return this.currentItemsCart.length > 0;
    },

    currentQuantityChosen() {
      return this.tabItems[this.currentDispalyItemIndex].quantityChosen;
    },

    nbItemsCart() {
      return this.currentItemsCart.length;
    },
  },

  methods: {
    ChangeStateOfCart() {
      if (!this.displayCart) this.displayCart = true;
      else this.displayCart = false;
    },
    // removeDisplayCart() {
    //   if (this.displayCart) this.displayCart = false;
    // },
    increment() {
      this.tabItems[this.currentDispalyItemIndex].quantityChosen++;
    },
    decrement() {
      this.tabItems[this.currentDispalyItemIndex].quantityChosen > 1
        ? this.tabItems[this.currentDispalyItemIndex].quantityChosen--
        : "";
    },
    addItemsToCart() {
      if (this.tabItems[this.currentDispalyItemIndex].quantityChosen != 0)
        this.currentItemsCart.push(this.tabItems[this.currentDispalyItemIndex]);
    },

    removeItemCart(index) {
      this.currentItemsCart.splice(index, 1);
      this.tabItems[this.currentDispalyItemIndex].quantityChosen = 0;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid orange;
  align-items: center;
  position: relative;
  .containerCart {
    height: fit-content;
    min-height: 30vh;
    width: 20vw;
    // border: 2px solid khaki;
    position: absolute;
    top: 9vh;
    right: 12vw;
    background-color: white;
    border-radius: 7px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);

    .titleCart {
      border-bottom: 1px solid rgba(128, 128, 128, 0.3);
      text-align: left;
      height: 20%;
    }
    .emptyCartMsg {
      min-height: 20vh;
      width: 98%;
      display: flex;
      justify-content: center;
      align-items: center;
      // border: solid green;

      p {
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
        height: 100%;


      }
    }
    .detailsCartContainer {
      padding: 0 7px;
      button:hover,
      i:hover {
        cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAf4AAAPVAAAH1QAAB9WAAA3VgAAd/4AAGbaAAAG2gAABtgAAAYAAAAGAAAABgAAAAYAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gD///4A///8AP//+AB///AAf//wAD//4AA//8AAP//AAD//5AA///wAf//8Af///D////w////8P////n///8="),
          auto;
      }
      .detailsItem {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0;
        padding: 0;
        img {
          border-radius: 10px;
          height: 50px;
          width: 50px;
        }
        p {
          text-align: left;
          padding-left: 10px;
          font-size: 0.9vw;
        }

        .nameItem {
          margin-bottom: 0;
        }

        .priceCalcul {
          display: flex;
          justify-content: space-evenly;
          width: 75%;
          .totalAmount {
            font-weight: bold;
          }
        }
        i {
          opacity: 0.5;
        }
      }
      button {
        font-size: 105%;
        width: 95%;
        border-radius: 7px;
        padding: 0.7em 0;
        color: white;
        background-color: rgb(234, 131, 56);
        border: none;
        margin-top: 15px;
      }
      button:hover {
        opacity: 0.7;
      }
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    height: 10vh;
    // border: solid ;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
    .logo {
      display: inline-flex;
      // display: flex;
      // align-items: center;
      font-size: 30px;
      font-weight: bold;
      margin-left: 15px;
      // height: 100%;
      width: 15%;
      text-align: left;
      // padding: 0;
      // span{
      //   padding: 0;
      //   margin: 0;
      // }
    }
    nav {
      width: 75%;
      display: flex;
      align-items: flex-start;

      .nav-list {
        width: 60%;
        height: 80%;

        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        li {
          opacity: 0.7;
          position: relative;
          height: 100%;
        }
        li:hover {
          cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAf4AAAPVAAAH1QAAB9WAAA3VgAAd/4AAGbaAAAG2gAABtgAAAYAAAAGAAAABgAAAAYAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gD///4A///8AP//+AB///AAf//wAD//4AA//8AAP//AAD//5AA///wAf//8Af///D////w////8P////n///8="),
            auto;
        }
        li:hover::before {
          content: "";
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 5px;
          background-color: rgb(234, 131, 56);
        }
      }
    }

    .container-avatar {
      display: flex;
      justify-content: end;
      align-items: center;

      width: 10%;
      i {
        color: #2c3e50;
        font-size: 1.5vw;
        position: relative;
        span {
          position: absolute;
          top: -50%;
          right: -10%;
          background-color: rgb(234, 131, 56);
          font-size: 5px;
          border-radius: 50%;
          padding: 1em 1.2em;
          color: white;
        }
      }
      img {
        width: 40%;
        border-radius: 50%;
        margin-left: 40px;
      }

      i:hover,
      img:hover {
        cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAf4AAAPVAAAH1QAAB9WAAA3VgAAd/4AAGbaAAAG2gAABtgAAAYAAAAGAAAABgAAAAYAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gD///4A///8AP//+AB///AAf//wAD//4AA//8AAP//AAD//5AA///wAf//8Af///D////w////8P////n///8="),
          auto;
      }
      img:hover {
        border: 3px solid rgb(234, 131, 56);
      }
    }
  }

  .mainContent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
    width: 100%;
    // border: 2px solid red;
    .slideShowContainer,
    .detailsCommand {
      width: 40%;
      height: 90%;
    }
    .slideShowContainer {
      // border: 2px solid green;
    }
    .detailsCommand {
      border: 2px solid yellow;
      padding: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      .detailsMainContainer {
        border: 2px solid blue;
        height: 80%;
        width: 75%;
        text-align: left;

        .nameCompany {
          text-transform: uppercase;
          font-size: 12px;
          color: rgb(234, 131, 56);
          font-weight: bold;
          text-align: left;
        }
        h2 {
          font-size: 2.5vw;
          color: black;
        }
        .descriptionSneakers {
          color: rgb(193, 194, 199);
          font-size: 13px;
        }
        .containerPrice {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 28%;
          padding-bottom: 0;
          margin-bottom: 0;

          .price {
            color: black;
            font-size: 1.5vw;
            font-weight: bold;
          }
          .discount {
            color: rgb(234, 131, 56);
            font-weight: bold;
            background-color: rgb(252, 238, 227);
            padding: 5px;
            border-radius: 5px;
            font-size: 95%;
          }
        }
        .originalPrice {
          color: rgb(202, 205, 212);
          font-weight: bold;
          font-size: 0.9vw;
          text-decoration: line-through;
          // padding-top:0;
          margin-top: 5px;
          margin-bottom: 30px;
        }
        .quantityContainer {
          width: 100%;
          display: flex;
          justify-content: space-between;

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
                font-weight: bold;
              }
            }
            .minus:hover,
            .plus:hover {
              cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAf4AAAPVAAAH1QAAB9WAAA3VgAAd/4AAGbaAAAG2gAABtgAAAYAAAAGAAAABgAAAAYAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gD///4A///8AP//+AB///AAf//wAD//4AA//8AAP//AAD//5AA///wAf//8Af///D////w////8P////n///8="),
                auto;
            }
            .number {
              color: black;
              font-weight: bolder;
            }
          }
          .containerAddCart:hover {
            cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAf4AAAPVAAAH1QAAB9WAAA3VgAAd/4AAGbaAAAG2gAABtgAAAYAAAAGAAAABgAAAAYAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gD///4A///8AP//+AB///AAf//wAD//4AA//8AAP//AAD//5AA///wAf//8Af///D////w////8P////n///8="),
              auto;
            opacity: 0.7;
          }
          .containerAddCart {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 7px;

            width: 50%;
            color: white;
            background-color: rgb(234, 131, 56);

            div {
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


</style>
