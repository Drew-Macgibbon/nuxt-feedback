<template>
    <div class="bg-white p-4 rounded-md shadow-md">
      <h3 class="text-lg font-semibold text-gray-600">{{ data.title }}</h3>
      <p class="text-sm text-gray-400">{{ data.description }}</p>
      <div class="mt-2 flex items-center">
        <span class="text-xs text-gray-400">Priority: {{ data.priority }}</span>
        <span class="ml-2 text-xs text-gray-400">Posted by: {{ data.postedBy }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    data: Object,
  });
  const data = props.data;
  </script>
  