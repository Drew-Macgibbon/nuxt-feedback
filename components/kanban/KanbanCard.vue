<template>
  <div class="bg-white p-4 rounded-md shadow-md cursor-pointer" @click="isOpen = true">
    <h3 class="text-md font-semibold text-gray-600">{{ data.title }}</h3>
    <div class="mt-2 flex items-center">
      <UBadge :color="badgeColor" variant="subtle">{{ data.priority }}</UBadge>
      <span class="ml-2 text-xs text-gray-400">{{ data.postedBy }}</span>
    </div>
    <div>
      <UModal v-model="isOpen" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <div class="flex items-center justify-between bg-green-700 text-white p-4 rounded-t-md">
              <h3 class="text-base font-semibold leading-6">
                {{ data.title }}
              </h3>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                @click="isOpen = false" />
            </div>
          </template>
          <div class="p-4 ">
            <div class="flex justify-between mb-4">
              <span class="text-gray-400">Posted by</span>
              <UAvatar chip-color="primary" chip-text="" chip-position="top-right" size="sm" />
            </div>
            <div class="flex justify-between mb-4">
              <span class="text-gray-400">Priority</span>
              <UBadge :color="badgeColor" variant="subtle">{{ data.priority }}</UBadge>
            </div>
            <div class="flex justify-between mb-4">
              <span class="text-gray-400">Description</span>
              <p class="text-md text-gray-200 font-semibold">{{ data.description }}</p>
            </div>
            <div class="flex justify-between mb-4">
              <span class="text-gray-400">Status</span>
              <p class="text-md text-gray-200 font-semibold">{{ data.status }}</p>
            </div>
            <div class="flex justify-between mb-4">
              <span class="text-gray-400">Created on</span>
              <p class="text-md text-gray-200 font-semibold">{{ data.createdDate }}</p>
            </div>
            <div class="flex justify-between mb-4">
              <span class="text-gray-400">Due</span>
              <p class="text-md text-gray-200 font-semibold">{{ data.dueDate }}</p>
            </div>
            <div class="flex justify-between mb-4">
              <span class="text-gray-400">Category</span>
              <div>
                <UBadge color="orange" variant="soft" v-for="tag in data.tags" :key="tag" class="ml-2">{{ tag }}</UBadge>
              </div>
            </div>
          </div>
        </UCard>
      </UModal>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: Object,
});

const data = props.data;

const isOpen = ref(false);

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
