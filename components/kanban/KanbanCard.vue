<template>
  <div class="bg-white p-4 rounded-md shadow-lg cursor-pointer hover:shadow-sm" @click="isOpen = true">
    <div class="flex">
      <UIcon name="i-mdi-record-circle-outline" class="w-4 h-4 text-green-600" />
      <span class="ml-1 text-xs text-gray-400">#{{ data.id }}</span>
      <!-- <UAvatar class="justify-end p-1 m-auto" size="xs" /> -->
    </div>
    <div class="flex justify-between">
      <h3 class="text-sm mt-1 font-semibold text-gray-600">{{ data.title }}</h3>
    </div>
    <div class="mt-4 flex items-center">
      <UBadge :color="badgeColor(data.priority)" variant="subtle">{{ data.priority }}</UBadge>
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

              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpen = false"
              />
            </div>
            <div class="mt-4 flex flex-wrap justify-between text-sm">
              <div class="mb-4 w-1/2">
                <span class="text-gray-400 mr-4">Posted by</span>
                <UAvatar chip-color="primary" chip-text="" chip-position="top-right" size="xs" />
              </div>
              <div class="mb-4 w-1/2">
                <span class="text-gray-400 mr-4">Priority</span>
                <UBadge :color="badgeColor(data.priority)" variant="subtle">{{ data.priority }}</UBadge>
              </div>
              <div class="flex w-1/2 mb-4">
                <span class="text-gray-400 mr-4">Status </span>
                <p class="text-md text-gray-200 font-semibold">{{ data.status }}</p>
              </div>
              <div class="w-1/2 flex">
                <span class="text-gray-400 mr-2">Category</span>
                <div>
                  <UBadge color="orange" variant="soft" v-for="tag in data.tags" :key="tag" class="ml-2"
                    >{{ tag }}
                  </UBadge>
                </div>
              </div>
              <div class="flex w-1/2">
                <span class="text-gray-400 mr-4">Created </span>
                <p class="text-gray-200 font-semibold">{{ useTimeAgo(new Date(data.createdDate)) }}</p>
              </div>
            </div>
          </template>
          <div class="mb-4">
            <span class="text-gray-400 mt-2">Description</span>
            <p class="text-md text-gray-200 font-semibold mt-4">{{ data.description }}</p>
          </div>
          <template #footer>
            <div class="mb-4">
              <span class="text-gray-400 mt-2">Comments coming soon</span>
            </div>
          </template>
        </UCard>
      </UModal>
    </div>
  </div>
</template>

<script setup lang="ts">
// When using defineProps add the type and required properties
defineProps({
  data: {
    type: Object, // I have added types to japneets branch, add here on merge
    required: true,
  },
})

const isOpen = ref(false)

// this will not change, so no need to use computed
type BadgeColors = 'red' | 'yellow' | 'green' | 'gray'
const badgeColor = (priority: string): BadgeColors => {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'red'
    case 'medium':
      return 'yellow'
    case 'low':
      return 'green'
    default:
      return 'gray'
  }
}
</script>
