import { SupabaseClient, PostgrestSingleResponse } from '@supabase/supabase-js'

export default function useFeedbackTable() {
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

  const fetchFeedbacks = async (): Promise<any[]> => {
    try {
      const { data, error } = await client.from('feedbacks').select('*')
      if (error) {
        throw createError(`Error fetching feedbacks: ${error.message}`)
      }
      return data
    } catch (error: any) {
      throw createError(`Error fetching feedbacks: ${error.message}`)
    }
  }

  return {
    createFeedback,
    fetchFeedbackByID,
    fetchFeedbacks,
  }
}
