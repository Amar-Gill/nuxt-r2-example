<template>
  <div>
    <button @click="upload">Mega Ballz</button>
  </div>
</template>

<script setup lang="ts">
const upload = () => $fetch("/api/image", { method: "PUT" });
</script>
