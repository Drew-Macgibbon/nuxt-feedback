<template>
  <div class="py-32">
    <button class="p-2 rounded-md bg-emerald-500 text-white" @click="toggleFeedbackInput">Get Feedback</button>
    <div v-if="showFeedbackInput" class="mt-4">
      <textarea
        v-model="feedbackText"
        class="border rounded p-2 w-full"
        rows="4"
        placeholder="Write your ideas to imporve the website."
      ></textarea>
      <button @click="submitFeedback" class="mt-2 p-2 rounded-md bg-emerald-500 text-white w-full">Submit</button>
    </div>
    <p>{{ feedbacks }}</p>
  </div>
</template>

<script setup lang="ts">
import { useFeedbackTable } from '#imports'
import { ref } from 'vue'

const feedbackTable = useFeedbackTable()

const feedbacks = ref({})
const showFeedbackInput = ref(false)
const feedbackText = ref('')

const toggleFeedbackInput = () => {
  showFeedbackInput.value = !showFeedbackInput.value
}

const submitFeedback = async () => {
  console.log(feedbackText.value)

  if (feedbackText.value.trim() === '') {
    console.log('Please enter your suggestions before submitting.')
    return
  }

  const newFeedback = {
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    title: 'User Feedback',
    body: feedbackText.value,
    // user_id: 'Fetch from Supabase Auth',
    votes_weighted: 0.0,
    gh_issue: '',
    status: 0,
    priority: 0,
    github_pr: '',
    size: 0,
    category: 0,
    votes: 0,
  }
  try {
    await feedbackTable.createFeedback(newFeedback)
    console.log('Feedback submitted and a new task has been created.')
  } catch (error) {
    console.error(error)
  }

  feedbackText.value = ''
}

const getFeedback = async () => {
  const { data, error } = await useFetch('/api/feedback')
  if (error.value) {
    console.error(error.value)
  } else {
    feedbacks.value = data
  }
}

definePageMeta({
  layout: 'feedback',
})
</script>
