import { appSchema } from "@nozbe/watermelondb"
import { postSchema } from "./post-schema"
import { commentSchema } from "./comment-schema"

export const schemas = appSchema({
  version: 1,
  tables: [postSchema, commentSchema]
})