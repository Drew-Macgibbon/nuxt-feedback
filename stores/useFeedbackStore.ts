import { SupabaseClient, PostgrestSingleResponse } from '@supabase/supabase-js'
import { feedbackSubmittedSchema, FeedbackSubmitted, Feedback } from '~/types/feedback'

export default defineStore('feedback', () => {
  const feedbacks = ref({})
  // const router = useRouter()
  const client: SupabaseClient = useNuxtApp().$supabase

  const createFeedback = async (feedbackData: any): Promise<any> => {
    try {
      await client.from('feedbacks').insert([feedbackData])
    } catch (error: any) {
      throw createError(`Error adding feedback: ${error.message}`)
    }
  }

  const fetchFeedbackByID = async (feedbackId: number): Promise<PostgrestSingleResponse<any> | null> => {
    try {
      const { data, error } = await client.from('feedbacks').select('*').eq('id', feedbackId).single()
      if (error) {
        throw createError(`Error fetching feedback: ${error.message}`)
      }
      return data
    } catch (error: any) {
      throw createError(`Error fetching feedback: ${error.message}`)
    }
  }

  const fetchFeedbacks = async (): Promise<Feedback[]> => {
    try {
      const { data, error } = await client.from('feedbacks').select('*')
      if (error) {
        throw createError(`Error fetching feedbacks: ${error.message}`)
      }
      return data as Feedback[]
    } catch (error: any) {
      throw createError(`Error fetching feedbacks: ${error.message}`)
    }
  }

  const submitFeedback = async (userFeedback: FeedbackSubmitted): Promise<void> => {
    console.log(userFeedback)
    const validatedFeedback = feedbackSubmittedSchema.safeParse(userFeedback)
    if (!validatedFeedback.success) {
      console.log('Please enter your suggestions before submitting.')
      // !TODO toast notification to indicate failure
      return
    }

    const newFeedback: Feedback = {
      created_at: new Date().toISOString(), // set on supabase row entry
      updated_at: new Date().toISOString(), // set on supabase row entry
      title: validatedFeedback.data.title,
      body: validatedFeedback.data.body,
      // user_id: 'Fetch from Supabase Auth',
      votes_weighted: 0.0,
      gh_issue: '', // set null on supabase row entry
      status: 0,
      priority: 0,
      github_pr: '', // set null on supabase row entry
      size: 0,
      category_id: validatedFeedback.data.category_id,
      votes: 0, // set default 1 on supabase row entry
    }

    try {
      await createFeedback(newFeedback)
      console.log('Feedback submitted and a new task has been created.')
      // !TODO redirect to provide indication of success
    } catch (error) {
      console.error(error)
      // !TODO toast notification to indicate failure
    }
  }

  const getFeedback = async () => {
    const { data, error } = await useFetch('/api/feedback')
    if (error.value) {
      console.error(error.value)
    } else {
      feedbacks.value = data
    }
  }

  return {
    createFeedback,
    fetchFeedbackByID,
    fetchFeedbacks,
    getFeedback,
    submitFeedback,
  }
})
