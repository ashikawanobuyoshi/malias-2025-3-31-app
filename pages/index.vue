<template>
    <div class="page-container">
      <div class="monitor-container">
        <!-- 左側モニター＋サムネイルギャラリー -->
        <div class="monitor-column">
          <MonitorDisplay :image="gallery[leftActiveIndex]" />
          <ThumbnailGallery :images="gallery" v-model:activeIndex="leftActiveIndex" />
        </div>
        <!-- 右側モニター＋サムネイルギャラリー -->
        <div class="monitor-column">
          <MonitorDisplay :image="gallery[rightActiveIndex]" />
          <ThumbnailGallery :images="gallery" v-model:activeIndex="rightActiveIndex" />
        </div>
      </div>
  
      <!-- チェック済み画像だけを表示するギャラリー -->
      <GalleryOutput :images="markedImages" />
    </div>
  </template>
  

  <script setup>
import { ref, computed, reactive } from 'vue'
import MonitorDisplay from '~/components/MonitorDisplay.vue'
import ThumbnailGallery from '~/components/ThumbnailGallery.vue'
import GalleryOutput from '~/components/GalleryOutput.vue'

// 左右で独立した画像選択状態を管理
const leftActiveIndex = ref(0)
const rightActiveIndex = ref(0)

// assets/images フォルダー内の jpg/png ファイルを自動読み込み
const imagesImport = Object.values(
  import.meta.glob("~/assets/images/*.{jpg,png}", { eager: true })
)

// gallery 配列を reactive として初期化（各画像は id, src, mark プロパティを持つ）
const gallery = reactive(
  imagesImport.map((img, index) => ({
    id: index,
    src: img.default,
    mark: null
  }))
)

// チェック済み画像（markが null でないもの）の算出
const markedImages = computed(() =>
  gallery.filter((img) => img.mark !== null)
)
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.monitor-container {
  display: flex;
  gap: 20px;
}
.monitor-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>