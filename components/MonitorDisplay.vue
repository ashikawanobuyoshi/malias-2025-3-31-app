<template>
    <div class="monitor-display">
      <img :src="image.src" alt="monitor image" />
      <div class="image-info">
        <span>画像番号: {{ image.id + 1 }}</span>
        <div class="checkmark-buttons">
          <button
            class="mark-btn red"
            :class="{ active: image.mark === 'red' }"
            @click="toggleMark('red')"
          >Red</button>
          <button
            class="mark-btn blue"
            :class="{ active: image.mark === 'blue' }"
            @click="toggleMark('blue')"
          >Blue</button>
          <button
            class="mark-btn yellow"
            :class="{ active: image.mark === 'yellow' }"
            @click="toggleMark('yellow')"
          >Yellow</button>
        </div>
      </div>
    </div>
  </template>

<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})

// チェックマークのトグル: 既に同じ色が設定されていれば解除、そうでなければ設定
function toggleMark(color) {
  props.image.mark = props.image.mark === color ? null : color
}
</script>

<style scoped>
.monitor-display {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
.monitor-display img {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
}
.image-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.checkmark-buttons button {
  margin-right: 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}
.checkmark-buttons button.active {
  font-weight: bold;
  border-color: currentColor;
}
.mark-btn.red {
  color: red;
}
.mark-btn.blue {
  color: blue;
}
.mark-btn.yellow {
  color: goldenrod;
}
</style>