<script setup>
import { watch, computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useCartStore } from '@/stores/cart'
const store = useCartStore()

const { addItem, increment, decrement } = store
const { cart } = storeToRefs(store)
console.log(cart.value)

watch(
  store,
  (state) => {
    console.log(state)
    localStorage.setItem('cartState', JSON.stringify(state))
  },
  { deep: true }
)

const productId = 1
const productQuantity = computed(() => {
  const item = cart.value.find((item) => item.id === productId)
  return item ? item.quantity : 0
})
</script>
<template>
  <section class="product-info">
    <h1>Sneaker Company</h1>

    <h2>Fall Limited Edition Sneakers</h2>

    <p>
      These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
      outer sole, they’ll withstand everything the weather can offer.
    </p>
    <div class="item-price">
      <div><span>$125.00</span> <span>50%</span></div>
      <span> $250.00 </span>
    </div>
    <div class="button-container">
      <div class="product-quantity">
        <button @click="increment(1)" class="add" title="increase-quantity">
          <svg
            width="12"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                id="b"
              />
            </defs>
            <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b" />
          </svg>
        </button>

        <span>{{ productQuantity }}</span>

        <button @click="decrement(1)" class="minus" title="decrease quantity">
          <svg
            width="12"
            height="4"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                id="a"
              />
            </defs>
            <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a" />
          </svg>
        </button>
      </div>

      <div class="add-button"  @click="addItem({ id: 1, item: 'Fall Limited Edition Sneakers',price:125.00 })">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fill-rule="nonzero"
          />
        </svg>
        <button>Add to cart</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-info {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}
.product-info > h1 {
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: hsl(26, 100%, 55%);
  font-weight: 700;
}
.product-info > h2 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: hsl(220, 13%, 13%);
}
.product-info > p {
  color: hsl(220, 14%, 75%);
  font-weight: 400;
}
.item-price {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
}
.item-price > div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item-price > div > span:nth-of-type(1) {
  align-self: flex-start;
  font-size: 3rem;
  font-weight: 700;
  color: hsl(220, 13%, 13%);
}

.item-price > div > span:nth-of-type(2) {
  color: hsl(26, 100%, 55%);
  background-color: hsl(25, 100%, 94%);
  font-size: 1.75rem;
  font-weight: 700;
  padding: 0 1rem;
  margin-left: 1.5rem;
  border-radius: 5px;
}

.item-price span:last-of-type {
  color: hsl(220, 14%, 75%);
}
.button-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap:10px;
}
.product-quantity {
  width: 98%;
  height: 50px;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  background-color: hsl(223, 64%, 98%);
  margin: 1rem 0;
}
.product-quantity>button.add ,.product-quantity>button.minus{
  cursor: pointer;
}

.add-button {
  width: 98%;
  height: 50px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: hsl(26, 100%, 55%);
  color: white;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 30px 20px 0  hsl(26, 100%, 90%);
  cursor: pointer;
}
.add-button:hover{
  background-color: hsl(26, 100%, 75%);
}
.add-button > svg > path {
  fill: white;
}

@media screen and (min-width: 768px) {
  .product-info {
    width: 45%;
    align-items: flex-start;
    text-align: left;
    padding: 4rem 14rem 2rem 0rem;
  }
  .product-info>h2{
    font-size: 3.5rem;
  }
  .item-price {
    flex-direction: column;
    align-items: center;
  }
  .item-price>div>span:nth-of-type(2){
    margin-top:8px;
  }
  .button-container {
    flex-direction: row;
  }
  .product-quantity{
    width: 30%;
  }
  .add-button{
    width: 65%;
  }
  .item-price span:last-of-type {
    align-self: flex-start;
  }
}
</style>
