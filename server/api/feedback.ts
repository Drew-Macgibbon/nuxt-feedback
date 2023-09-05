export default defineEventHandler(async (event) => {
  console.log('working')
  const supabase = await serverSupabaseClient(event)

  // this table will need to be created in the database
  const { data, error } = await supabase.from('feedback').select('*')

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})
