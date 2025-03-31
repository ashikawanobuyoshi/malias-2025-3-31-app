<template>
    <div class="thumbnail-gallery">
      <!-- 左側のナビゲーションボタン -->
      <button class="slider-btn" @click="prev" :disabled="currentStart === 0">◀</button>
  
      <!-- サムネイル表示エリア（常に5コマ分表示） -->
      <div class="thumbnails">
        <div
          v-for="(item, idx) in visibleThumbnails"
          :key="item.id"
          class="thumbnail"
          :class="{ active: currentStart + idx === activeIndex }"
          @click="selectThumbnail(currentStart + idx)"
        >
          <img :src="item.src" alt="thumbnail image" />
          <div class="thumb-index">{{ item.id + 1 }}</div>
        </div>
      </div>
  
      <!-- 右側のナビゲーションボタン -->
      <button
        class="slider-btn"
        @click="next"
        :disabled="currentStart + visibleCount >= images.length"
      >▶</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const props = defineProps({
    images: { type: Array, required: true },
    activeIndex: { type: Number, default: 0 }
  })
  const emit = defineEmits(['update:activeIndex'])
  
  const visibleCount = 5
  const currentStart = ref(0)
  
  // 現在表示すべき5個のサムネイルを算出
  const visibleThumbnails = computed(() =>
    props.images.slice(currentStart.value, currentStart.value + visibleCount)
  )
  
  // サムネイルクリックで親に選択インデックスを通知
  function selectThumbnail(idx) {
    emit('update:activeIndex', idx)
  }
  
  function prev() {
    if (currentStart.value > 0) {
      currentStart.value--
    }
  }
  
  function next() {
    if (currentStart.value + visibleCount < props.images.length) {
      currentStart.value++
    }
  }
  </script>
  
  <style scoped>
  .thumbnail-gallery {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
  .thumbnails {
    display: flex;
    gap: 10px;
    flex: 1;
    justify-content: space-between;
  }
  .thumbnail {
    cursor: pointer;
    position: relative;
    width: 18%;
    border: 1px solid transparent;
  }
  .thumbnail.active {
    border: 2px solid #333;
  }
  .thumbnail img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .thumb-index {
    position: absolute;
    bottom: 2px;
    right: 2px;
    background: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    padding: 2px 4px;
  }
  .slider-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  </style>