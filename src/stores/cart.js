import { ref, computed} from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref(JSON.parse(localStorage.getItem('cartState'))?.cart ?? [])
  
  const totalQuantity = computed(() =>
    cart.value.reduce((a, b) => a + b.quantity, 0)
  )

  function increment(itemId) {
    const findItem = cart.value.find((item) => item.id === itemId)
    if(findItem) findItem.quantity++
  }
  
  function decrement(itemId) {
    const findItem = cart.value.find((item) => item.id === itemId)
    if(findItem.quantity>=1)    findItem.quantity--
    if(findItem.quantity<1){
      const index = cart.value.findIndex(item => item.id === itemId);
    if (index !== -1) {
      cart.value.splice(index,1);
    }
    }

  }
  
  function addItem(newItem) {
    const itemExists = cart.value.find((item) => item.id === newItem.id)
    itemExists ? itemExists.quantity++ : cart.value.push({...newItem,quantity:1})
  }
  
  function removeItem(itemId) {
    const index = cart.value.findIndex(item => item.id === itemId);
    if (index !== -1) {
      cart.value.splice(index,1);
    }
  }
 

  return { cart, increment, decrement, addItem, removeItem,totalQuantity }
})

