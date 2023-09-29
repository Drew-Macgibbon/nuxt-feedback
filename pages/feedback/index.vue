<template>
  <div class="py-32">
    <button class="p-2 rounded-md bg-emerald-500 text-white" @click="toggleFeedbackInput">Get Feedback</button>
    <div v-if="showFeedbackInput" class="mt-4">
      <input v-model="userFeedback.title" class="border rounded p-2 w-full" rows="4" placeholder="Feedback title" />
      <textarea
        v-model="userFeedback.body"
        class="border rounded p-2 w-full"
        rows="4"
        placeholder="Write your ideas to imporve the website."
      ></textarea>
      <button
        @click="feedStore.submitFeedback(userFeedback)"
        class="mt-2 p-2 rounded-md bg-emerald-500 text-white w-full"
      >
        Submit
      </button>
    </div>
    <p>{{ feedbacks }}</p>
  </div>
</template>

<script setup lang="ts">
import { FeedbackSubmitted } from '~/types/feedback'

// import { useFeedbackTable } from '#imports'
// import { ref } from 'vue'
// vue functionalities are auto imported, likewise with stores/composables/components
// I have extracted most of the logic to the store, separating concerns.

const userFeedback = ref({
  user_id: '35b4a2da-ec8e-4e15-909c-9de13acbc1db',
  title: '',
  body: '',
  category_id: 0,
} as FeedbackSubmitted)
const showFeedbackInput = ref(false)

const feedStore = useFeedbackStore()
const { feedbacks } = storeToRefs(feedStore) // storeToRefs is a pinia function that converts store to refs to retain reactivity

const toggleFeedbackInput = () => {
  showFeedbackInput.value = !showFeedbackInput.value
}

definePageMeta({
  layout: 'feedback',
})
</script>
