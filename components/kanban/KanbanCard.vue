<template>
  <div class="bg-white p-4 rounded-md shadow-md">
    <h3 class="text-md font-semibold text-gray-600">{{ data.title }}</h3>
    <div class="mt-2 flex items-center">
      <UBadge :color="badgeColor" variant="subtle">{{ data.priority }}</UBadge>
      <span class="ml-2 text-xs text-gray-400">{{ data.postedBy }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: Object,
});

const data = props.data;

const badgeColor = computed(() => {
  switch (data.priority.toLowerCase()) {
    case 'high':
      return 'red';
    case 'medium':
      return 'yellow';
    case 'low':
      return 'green';
    default:
      return 'gray';
  }
});
</script>
