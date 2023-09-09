<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <NavTop />
    <div class="flex-grow flex relative w-full h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
3