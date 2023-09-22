import { z } from 'zod'

export const feedbackSubmittedSchema = z.object({
  title: z.string(),
  body: z.string(),
  user_id: z.string(),
  category_id: z.number(),
})

export const feedbackSchema = z.extend(feedbackSubmittedSchema).object({
  created_at: z.string(),
  updated_at: z.string(),
  votes_weighted: z.number(),
  gh_issue: z.string(),
  status: z.number(),
  priority: z.number(),
  github_pr: z.string(),
  size: z.number(),
  votes: z.number(),
})

export type Feedback = z.infer<typeof feedbackSchema>
export type FeedbackSubmitted = z.infer<typeof feedbackSubmittedSchema>
