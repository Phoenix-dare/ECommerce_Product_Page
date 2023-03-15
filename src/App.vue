<script setup>
import NavBar from './components/Nav-bar.vue'
import LightBox from './components/Light-box.vue'
import ProductCard from './components/Product-card.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)

const mediaQuery = '(max-width: 768px)'
const mediaQueryList = window.matchMedia(mediaQuery)

const handleMediaQueryChange = (event) => {
  isMobile.value = event.matches
}

onMounted(() => {
  mediaQueryList.addEventListener('change', handleMediaQueryChange)
})

onUnmounted(() => {
  mediaQueryList.removeEventListener('change', handleMediaQueryChange)
})
</script>

<template>
  <header>
    <NavBar :isMobile="isMobile" />
  </header>
  <main>
    <LightBox :isMobile="isMobile" />
    <ProductCard />
  </main>
</template>
