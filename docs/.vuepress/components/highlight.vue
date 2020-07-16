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
  .highlight pre{
    padding: 10px;
    box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
  }
  .highlight pre code {
    color: #333 !important;
  }
</style>