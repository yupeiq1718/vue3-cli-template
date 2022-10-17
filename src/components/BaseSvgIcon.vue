<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
}

const props = defineProps<Props>()

const iconName = computed(() => `#${props.name}`)

</script>
<template>
  <svg class="inline-block">
    <use :xlink:href="iconName" />
  </svg>
</template>
