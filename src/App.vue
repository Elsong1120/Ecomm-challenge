<template>
  <div id="App">
    <header>
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
        <i class="fa-solid fa-cart-shopping"></i>
        <!-- <font-awesome-icon icon="fa-cart-shopping" /> -->
        <img src="../src/assets/image-avatar.png" alt="avatar" />
      </div>
    </header>
    <!-- <hr /> -->

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
              <span class="minus"><i class="fa-solid fa-minus"></i></span
              ><span class="number">0</span
              ><span class="plus"><i class="fa-solid fa-plus"></i></span>
            </div>
            <div class="containerAddCart">
              <div>
                <i class="fa-solid fa-cart-shopping"></i>
                <span>Add to cart</span>
              </div>
            </div>
          </div>
        </div>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;

  header {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 10vh;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
    .logo {
      font-size: 30px;
      font-weight: bold;
      margin-left: 15px;
      width: 20%;
      text-align: left;
    }
    nav {
      width: 60%;
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
      justify-content: space-between;
      i {
        color: #2c3e50;
        font-size: 1.5vw;
      }
      img {
        width: 50%;
        border-radius: 50%;
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
  hr {
    width: 90%;
    color: rgba($color: #000000, $alpha: 0.2);
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
      width: 50%;
      height: 90%;
    }
    .slideShowContainer {
      border: 2px solid green;
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
