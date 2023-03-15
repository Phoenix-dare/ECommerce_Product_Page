<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'

const store = useCartStore()

const { totalQuantity, cart } = storeToRefs(store)
const { removeItem } = store
const showNav = ref(false)
const showCart = ref(false)

const handleClick = () => {
  showNav.value = !showNav.value
}
const handleCartClick = () => {
  showCart.value = !showCart.value
}
// eslint-disable-next-line no-unused-vars
const props = defineProps({ isMobile: Boolean })

const cartItems = computed(() => {
  return cart.value
    ? Object.values(cart.value).map((item) => {
        return {
          ...item,
          totalPrice: item.price * item.quantity
        }
      })
    : []
})
</script>

<template>
  <div class="header-container">
    <div class="logo-nav">
      <div @click="handleClick" class="hamburger" v-show="isMobile">
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <div class="logo">
        <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
            fill="#1D2026"
            fill-rule="nonzero"
          />
        </svg>
      </div>

      <nav v-if="!isMobile"  class="nav-desk">
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>

          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
    <aside v-if="isMobile && showNav" class="nav-side">
      <div @click="handleClick" v-show="showNav">
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg>
      </div>

      <nav>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>

          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </aside>

    <div class="cart-container">
      <aside class="cart-items" v-show="showCart">
        <h3>Cart</h3>

        <div v-if="!cartItems.length" class="empty-cart">Your cart is empty</div>
        <div v-else>
          <div v-for="(item, index) in cartItems" :key="index" class="cart-product">
            <img src="../assets/images/image-product-1-thumbnail.jpg" alt="product-image" />
            <div>
              <span class="item-name"> {{ item.item }} </span>
              <div>
                <span class="item-price"> {{ item.price }} x </span>
                <span class="item-quantity">
                  {{ item.quantity }}
                </span>
                <span class="item-total">
                  ${{ item.price * item.quantity }}
                </span>
              </div>
            </div>
            <div @click="removeItem(1)" class="delete-icon">
              <svg
                width="14"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a"
                  />
                </defs>
                <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
              </svg>
            </div>
          </div>
          <button type="button" title="checkout-button" class="checkout-button">Checkout</button>
        </div>
      </aside>
      <div @click="handleCartClick">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fill-rule="nonzero"
          />
        </svg>
        <span class="cart-quantity" :class="{ filled: totalQuantity > 0 }">
          {{ totalQuantity > 0 ? totalQuantity : null }}
        </span>
      </div>

      <img src="../assets/images/image-avatar.png" alt="user-image" />
    </div>
  </div>
</template>

<style scoped>
.header-container {
  height:8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}

.logo-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  height:100%;
}
.nav-desk {
  height: 100%;
  margin-left: 1rem;
}
.nav-desk > ul {
  height:90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.nav-desk > ul > li {
  height: 100%;
  padding-top: 3.5rem;
  cursor: pointer;
  color: hsl(220, 14%, 75%);
  font-weight: 500;
}
.nav-desk > ul > li:hover {
  border-bottom: 4px solid hsl(26, 100%, 55%);
}
.cart-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: end;
  gap: 20px;
  padding: 2rem;
}
.cart-container > div {
  position: relative;
  padding: 2rem 1rem;
}
.cart-container > div > .cart-quantity {
  position: absolute;
  top: 10px;
  right: 5px;
  width: 20px;
  height: 15px;
  padding: 0.25rem 0.5rem;
  border-radius: 25px;
  font-size: 0.8rem;
  font-weight: 700;
  color: white;
  text-align: center;
}
.cart-container > div > .cart-quantity.filled {
  background-color: hsl(26, 100%, 55%);
}
.cart-container > div > svg {
  cursor: pointer;
}
.cart-container > img {
  height: 40px;
  width: 40px;
  cursor: pointer;
}
.cart-container > img:hover {
  border: 3px solid hsl(26, 100%, 55%);
  border-radius: 50%;
}

.nav-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  z-index: 6;
  background-color: white;
  top: 0;
  left: 0;
  width: 65%;
  height: 100vh;
  padding: 4rem 3rem;
}
.nav-side > nav {
  margin-top: 2rem;
}

.nav-side > nav > ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:25px;
  font-size: 1.5rem;
  font-weight: 700;
  color:hsl(220, 13%, 13%)
}
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  width: 95vw;
  height: min-content;
  top: 75px;
  right: 10px;
  z-index: 4;
  padding: 1rem 1.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 15px 4px hsl(220, 14%, 75%);
}
.cart-items>h3{
  font-size: 1.4rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid hsl(220, 14%, 85%)
}
.cart-product {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}
.cart-product > img {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
.checkout-button {
  width: 90%;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 400;
  color: white;
  align-self: center;
  margin: 1rem;
  background-color: hsl(26, 100%, 55%);
  cursor: pointer;
}
.checkout-button:hover{
  background-color:hsl(25, 100%, 94%);

}
.item-name {
  font-size: 1.4rem;
  color: hsl(220, 14%, 75%);
  font-weight: 700;
}

.item-price {
  font-size: 1.4rem;
  color: hsl(220, 14%, 75%);
}

.item-quantity {
  font-size: 1.4rem;
  color: hsl(220, 14%, 75%);
  margin-left: 0.5rem;
}

.item-total {
  font-size: 1.8rem;
  font-weight: 700;
  color: hsl(220, 13%, 13%);
  margin-left: 1rem;
}
.empty-cart{
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  color:hsl(219, 9%, 45%);
  margin: 2rem;
}
.delete-icon{
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .header-container {
    height:130px;
    border-bottom: 0.25px solid hsl(220, 14%, 75%);
  }
  .cart-items {
    width: 300px;
    height: max-content;
    top: 125px;
    right: 125px;
  }
}
</style>
