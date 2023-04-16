<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div id="vue-plugin">
    <button @click="count++">Count is {{ count }}</button>
  </div>
</template>
