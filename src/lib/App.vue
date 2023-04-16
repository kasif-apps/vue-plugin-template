<script setup lang="ts">
  import { ref } from "vue";

  const count = ref(0);
</script>

<template>
  Hello from Vue

  <button @click="count++">Count is {{count}}</button>
</template>
