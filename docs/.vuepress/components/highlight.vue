<template>
  <div v-highlight class='highlight'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'highlight',
}
</script>

<style>
  .highlight pre code {
    color: #333 !important;
  }
</style>