<template>
  <div class="flex-1 max-w-md p-4 bg-gray-200 rounded-md">
    <h2 class="text-md font-semibold text-gray-800">
      <UIcon :name="getIconForTitle(title)" class="w-5 h-5 justify-between" />
      {{ title }}
    </h2>
    <div class="mt-4 space-y-4">
      <KanbanCard v-for="item in items" :key="item.id" :data="item" />
    </div>
  </div>
</template>
  
<script setup>
import KanbanCard from './KanbanCard.vue';
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  items: Array,
});

const title = props.title;
const items = props.items;

const getIconForTitle = () => {
  switch (title.toLowerCase()) {
    case 'issues':
      return 'i-heroicons-light-bulb'; 
    case 'todo':
      return 'i-heroicons-check-circle'; 
    case 'in-progress':
      return 'i-heroicons-stop-circle'; 
    case 'done':
      return 'i-heroicons-check-circle'; 
    case 'backlog':
      return 'i-heroicons-archive-box'; 
    case 'cancelled':
      return 'i-heroicons-x-circle'; 
    default:
      return 'i-heroicons-question-mark-circle'; 
  }
};
</script>
