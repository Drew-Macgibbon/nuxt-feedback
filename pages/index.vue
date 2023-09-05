<template>
  <div>
    <h1>Hello world</h1>
    <UButton @click="getFeedback"> Get Feedback </UButton>
    {{ feedbacks }}
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
</script>

<style scoped></style>
