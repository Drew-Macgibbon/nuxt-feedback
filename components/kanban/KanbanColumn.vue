<template>
  <div class="flex-1 p-4 bg-gray-200">
    <h2 class="text-md font-semibold text-gray-800 border-b border-gray-300">
      <UIcon :name="getIconForTitle(title)" class="w-4 h-4 justify-between" />
      {{ title }}
    </h2>
    <div class="mt-4 space-y-2">
      <KanbanCard v-for="item in items" :key="item.id" :data="item" @open-modal="openModal" />
    </div>
  </div>
</template>

<script setup>
// these are auto-imported
// import KanbanCard from './KanbanCard.vue';
// import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  items: Array,
})

// destructuring like this is not needed, you can simply use title and items in the template
// unless you use const props =, then you will have to use props.title and props.items
// the only time you ned to use const props is if you need to directly use props in the script setup, which is unusual
const title = props.title
const items = props.items

const getIconForTitle = () => {
  switch (title.toLowerCase()) {
    case 'issues':
      return 'i-heroicons-light-bulb'
    case 'todo':
      return 'i-ic-round-access-time'
    case 'in-progress':
      return 'i-mdi-circle-slice-4'
    case 'done':
      return 'i-ic-round-check-circle-outline'
    case 'backlog':
      return 'i-heroicons-archive-box'
    case 'cancelled':
      return 'i-mdi-close-circle-outline'
    default:
      return 'i-heroicons-question-mark-circle'
  }
}
</script>
