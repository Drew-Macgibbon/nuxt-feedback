<template>
    <div class="flex-1 max-w-md p-4 bg-gray-100 rounded-md">
      <h2 class="text-lg font-semibold text-gray-800">{{ title }}</h2>
      <div class="mt-4 space-y-4">
        <KanbanCard v-for="item in items" :key="item.id" :data="item" />
      </div>
    </div>
  </template>
  
  <script setup>
  import KanbanCard from './KanbanCard.vue';
  const props = defineProps({
    title: String,
    items: Array,
  });
  const title = props.title;
  const items = props.items;
  </script>
  