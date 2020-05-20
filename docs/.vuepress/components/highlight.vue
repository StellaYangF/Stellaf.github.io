<template>
  <div v-highlight class='highlight'>
    <slot></slot>
  </div>
</template>

<style>
  .highlight pre code {
    color: #333 !important;
  }
</style>