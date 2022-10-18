<script setup lang="ts">
interface Props {
  name: string
}

const props = defineProps<Props>()

const iconName = computed(() => `#${props.name}`)

const a = 1

</script>
<template>
  <svg class="inline-block">
    <use :xlink:href="iconName" />
  </svg>
</template>
