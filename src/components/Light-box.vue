<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ isMobile: Boolean })

const images = ref([
  {
    src: './src/assets/images/image-product-1.jpg',
    thumbnail: './src/assets/images/image-product-1-thumbnail.jpg'
  },
  {
    src: './src/assets/images/image-product-2.jpg',
    thumbnail: './src/assets/images/image-product-2-thumbnail.jpg'
  },
  {
    src: './src/assets/images/image-product-3.jpg',
    thumbnail: './src/assets/images/image-product-3-thumbnail.jpg'
  },
  {
    src: './src/assets/images/image-product-4.jpg',
    thumbnail: './src/assets/images/image-product-4-thumbnail.jpg'
  }
])
const isLightboxOpen = ref(false)
const currentImageIndex = ref(0)
const selectedImageIndex = ref(null)

const openLightbox = (index) => {
  currentImageIndex.value = index
  selectedImageIndex.value = index
  isLightboxOpen.value = true
}
const closeLightbox = () => {
  isLightboxOpen.value = false
}
const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
    selectedImageIndex.value = currentImageIndex.value
  }
}
const nextImage = () => {
  if (currentImageIndex.value < images.value.length - 1) {
    currentImageIndex.value++
    selectedImageIndex.value = currentImageIndex.value
  }
}

const currentImage = computed(() => images.value[currentImageIndex.value])
</script>

<template>
  <div class="gallery">
    <div v-if="isMobile" class="image-mobile">
      <div @click="prevImage" class="svg-container previous">
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>

      <img :src="currentImage.src" alt="Image" />

      <div @click="nextImage" class="svg-container next">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </div>

    <div v-else class="images-container">
      <img :src="currentImage.src" alt="display-image" />
      <div class="thumbnail-container">
        <div v-for="(image, index) in images" :key="index" @click="openLightbox(index)" :class="{ 'selected': index === selectedImageIndex }">
          <img :src="image.thumbnail" alt="Image thumbnail" />
          <div class="overlay"></div>
        </div>
      </div>
    </div>

    <div v-if="isLightboxOpen && !isMobile" class="lightbox">
      <div class="lightbox-content">
        <div class="lightbox-close" @click="closeLightbox">
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div class="lightbox-main-image">
          <div>
            <div @click="prevImage" class="lightbox-svg previous">
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>

            <img :src="currentImage.src" alt="Image" />

            <div @click="nextImage" class="lightbox-svg next">
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            >
          </div>
        </div>
        <div class="lightbox-thumbnail-container">
          <div v-for="(image, index) in images" :key="index" @click="openLightbox(index)" :class="{ 'selected': index === selectedImageIndex }">
            <img :src="image.thumbnail" alt="Image thumbnail" />
            <div class="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 35vh;
  overflow: hidden;
  margin: 1rem 0rem;
}
.image-mobile {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.image-mobile > img {
  max-width: 100%;
  object-fit: cover;
}
.image-mobile > .svg-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  background-color: white;
  border-radius: 50%;
}
.svg-container.previous {
  left: 15px;
}
.svg-container.next {
  right: 15px;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.lightbox-content {
  position: relative;
  max-width: 30%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 3;
}
.lightbox-main-image {
  width: 100%;
}
.lightbox-main-image > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.lightbox-main-image > div > img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.lightbox-thumbnail-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  cursor: pointer;
}
.lightbox-thumbnail-container>div{
  position: relative;
}
.lightbox-thumbnail-container > div > img {
  max-width: 75px;
  object-fit: cover;
  border-radius: 10px;
}
.lightbox-thumbnail-container > div:hover .overlay {
  opacity: 55%;
  border-radius: 10px;
  max-width:75px;
  max-height: 75px;
}
.lightbox-thumbnail-container > div.selected .overlay {
  opacity: 50%;
}

.lightbox-thumbnail-container > div.selected img {
  box-shadow:0 0 0 3px hsl(26, 100%, 44%);
}

.lightbox-close {
  align-self: flex-end;
  margin-right: 2rem;
  cursor: pointer;
}
.lightbox-close:hover path{
  fill:hsl(26, 100%, 44%)
}
.lightbox-svg {
  width: 40px;
  height: 40px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
}
.next:hover path, .previous:hover path{
stroke:hsl(26, 100%, 44%)
}
.lightbox-svg.previous {
  left: -27px;
}
.lightbox-svg.next {
  right: -17px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: white;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

@media screen and (min-width: 768px) {
  .gallery {
    width: 50%;
    height: max-content;
  }
  .images-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .images-container > img {
    max-width: 70%;
    object-fit: cover;
    border-radius: 10px;
    margin:1.5rem 1rem;
  }
  .thumbnail-container {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 1rem;
  }
  .thumbnail-container>div{
    position: relative;
  }
  .thumbnail-container>div:hover .overlay {
    opacity: 55%;
  }
  .thumbnail-container>div.selected .overlay {
    opacity: 50%;
  }
  .thumbnail-container img {
    max-width: 75px;
    border-radius: 10px;
  }
  .thumbnail-container > div.selected >img{
    box-shadow: 0 0 0 2px hsl(26, 100%, 44%);
  }
}
</style>
