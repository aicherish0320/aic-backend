<template>
  <div>用户信息</div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
console.log('props >>> ', props.id)
</script>

<style lang="scss" scoped></style>
