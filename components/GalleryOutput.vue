<template>
    <div class="gallery-output" v-if="images && images.length">
      <h3>チェック済み画像ギャラリー</h3>
      <div class="marked-gallery">
        <div v-for="img in images" :key="img.id" class="marked-item">
          <img :src="img.src" alt="marked image" />
          <div class="mark-indicator" :class="img.mark">
            {{ img.mark ? img.mark.toUpperCase() : '' }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    images: {
      type: Array,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .gallery-output {
    margin-top: 30px;
    border-top: 1px solid #ddd;
    padding-top: 20px;
  }
  .marked-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .marked-item {
    position: relative;
    width: 200px;
  }
  .marked-item img {
    width: 100%;
    height: auto;
  }
  .mark-indicator {
    position: absolute;
    top: 5px;
    left: 5px;
    background: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    padding: 2px 4px;
    border-radius: 4px;
  }
  .mark-indicator.red { color: red; }
  .mark-indicator.blue { color: blue; }
  .mark-indicator.yellow { color: goldenrod; }
  </style>