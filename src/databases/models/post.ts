import { Model } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import { field, text, date, children } from "@nozbe/watermelondb/decorators";

export default class Post extends Model {
  static table = "posts";
  static associations: Associations = {
    comments: { type: "has_many", foreignKey: "post_id" },
  };

  @text("title")
  title!: String;

  @text("body")
  body!: String;

  @field("is_pinned")
  isPinned!: boolean;

  @date("last_event_at")
  lastEventAt!: Date;

  @children("comments")
  comments!: Comment[];
}
