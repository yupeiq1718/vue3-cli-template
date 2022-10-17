<script setup lang="ts">
import { ref } from 'vue'

const index = ref(0)
const setIndex = (number: number) => {
  index.value = number
}
</script>

<template>
  <div class="about">
    <h1>This is an about page {{ index }}</h1>
  </div>
  <button @click="setIndex(9)">
    SAVE
  </button>
</template>

