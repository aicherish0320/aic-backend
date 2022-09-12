<template>
  <div>
    <PanThumb
      image="https://aic-lego.oss-cn-hangzhou.aliyuncs.com/editor-uploads/kj.jpeg"
      width="100px"
      height="100px"
    >
      <div>Hello</div>
      {{ $store.getters.userInfo.title }}
    </PanThumb>
  </div>
</template>

<script setup>
import PanThumb from '@/components/pan-thumb/index.vue'
</script>

<style lang="scss" scoped></style>
