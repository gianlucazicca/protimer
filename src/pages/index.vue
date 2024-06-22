<script setup lang="ts">

definePageMeta({
  auth: false
});
const h = useHelloWorld();
</script>

<template>
  <h1 class="text-3xl font-bold text-blue-400">Protimer - Check your times</h1>
  <UButton>{{h}}</UButton>
</template>

<style scoped>

</style>