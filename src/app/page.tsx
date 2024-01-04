"use client";

import Image from "next/image";
import { EnhancedPostList, PostList } from "./components/posts-list";
import { database } from "~/databases";
import Post from "~/databases/models/post";
import Comment from "~/databases/models/comment";

export default function Home() {
  async function handleCreatePost() {
    // Note: function passed to `database.write()` MUST be asynchronous
    const newPost = await database.write(async () => {
      const post = await database.get<Post>("posts").create((post) => {
        post.title = "New post";
        post.body = "Lorem ipsum...";
      });

      const comment = await database
        .get<Comment>("comments")
        .create((comment) => {
          comment.post.set(post);
          // comment.author.id = someUserId;
          comment.body = "Great post!";
        });

      // Note: Value returned from the wrapped function will be returned to `database.write` caller
      return post;
    });
  }

  return (
    <main>
      <button onClick={handleCreatePost}>Create static post</button>
      <EnhancedPostList />
    </main>
  );
}
