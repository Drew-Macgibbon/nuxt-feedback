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
      <button @click="submitFeedback" class="mt-2 p-2 rounded-md bg-emerald-500 text-white w-full">
        Submit
      </button>
    </div>
    <p>{{ feedbacks }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const feedbacks = ref({});
const showFeedbackInput = ref(false);
const feedbackText = ref('');

const toggleFeedbackInput = () => {
  showFeedbackInput.value = !showFeedbackInput.value;
};

const submitFeedback = async () => {
  if (feedbackText.value.trim() === '') {
    alert('Please enter your suggestions before submitting.');
    return;
  }

  const newFeedback = {
    title: 'User Feedback',
    body: feedbackText.value,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user_id: 'Fetch from Supabase Auth',
    votes: 0,
    votes_weighted: 0.0,
    status: 'open',
    category: 'feedback',
  };

  feedbacks.value = [newFeedback, feedbacks.value];
  feedbackText.value = '';
};

const getFeedback = async () => {
  const { data, error } = await useFetch('/api/feedback');
  if (error.value) {
    console.error(error.value);
  } else {
    feedbacks.value = data;
  }
};

definePageMeta({
  layout: 'feedback',
});
</script>