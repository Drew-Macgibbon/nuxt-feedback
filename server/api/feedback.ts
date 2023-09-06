export default defineEventHandler(async (event) => {
  console.log('feedback working')
  try {
    const feedback = await useStorage('db').getItem('feedback.json')
    console.log(feedback)
    // const supabase = await serverSupabaseClient(event)
    // // this table will need to be created in the database
    // const { data, error } = await supabase.from('feedback').select('*')
    // if (error) {
    //   throw createError({ statusMessage: error.message })
    // }
    return feedback
  } catch (error) {
    console.log(error)
    return error
  }
})
