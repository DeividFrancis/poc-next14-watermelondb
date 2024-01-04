import { Model, Relation } from "@nozbe/watermelondb";
import { field, relation, text } from "@nozbe/watermelondb/decorators";
import Post from "./post";
import { Associations } from "@nozbe/watermelondb/Model";

export default class Comment extends Model {
  static table = "comments";
  static associations: Associations = {
    posts: { type: "belongs_to", key: "post_id" },
  };

  @text("body")
  body!: String;

  @field("is_pinned")
  isPinned!: boolean;

  @relation("posts", "post_id") post!: Relation<Post>;
}
