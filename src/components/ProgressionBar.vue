<template>
  <div class="progress-bar">
    <div class="progress-bar-inner" :style="{ width: percentage }"></div>
    <span class="progress-bar-label">{{ percentage }}</span>
  </div>
</template>

<script>
export default {

  props: {
    progression: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    percentage() {
      return `${this.progression}%`
    },
  },
}
</script>

<style scoped>
.progress-bar {
  position: relative;
  height: 20px;
  width: 100%;
  /* max-width: 1200px; */
  margin: 2rem 0;
  border: 1px white solid;
  border-radius: 8px;
}
.progress-bar-inner {
  position: absolute;
  height: 100%;
  background-color: green;
  border-radius: 8px;
}
.progress-bar-label {
  display: block;
  text-align: center;
  font-size: large;
}
</style>
