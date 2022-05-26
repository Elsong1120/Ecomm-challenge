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
    <hr />

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

  header {
    display: flex;
    height: 10vh;
    .logo {
      font-size: 30px;
      font-weight: bold;
      margin-left: 15px;
      width: 20%;
    }
    nav {
      width: 60%;
      display: flex;
      align-items: flex-start;
      .nav-list {
        width: 50%;

        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        li {
          opacity: 0.7;
        }
      }
    }

    .container-avatar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      i {
        color: #2c3e50;
      }
      img {
        width: 50%;
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
    border: 2px solid red;
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
          width: 25%;
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
          margin-bottom:30px;
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
            }
            .number {
              color: black;
              font-weight: bold;
            }
          }
          .containerAddCart {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 7px;

            width: 50%;
            color: white;
            background-color: rgb(234, 131, 56);

            div{
              i{
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
