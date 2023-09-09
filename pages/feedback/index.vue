<template>
  <div class="py-32">
    <button class="p-2 rounded-md bg-emerald-500 text-white" @click="getFeedback">Get Feedback</button>
    <h1>Add the kanban here</h1>
    <p>{{ feedbacks }}</p>
  </div>
</template>

<script setup lang="ts">
const feedbacks = ref({})

const getFeedback = async () => {
  const { data, error } = await useFetch('/api/feedback')
  if (error.value) {
    console.error(error.value)
  }
  console.log(data)
  feedbacks.value = data
}

definePageMeta({
  layout: 'feedback',
})
</script>

<style scoped></style>
