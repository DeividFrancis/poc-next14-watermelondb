"use client";

import {
  compose,
  useDatabase,
  withDatabase,
  withObservables,
} from "@nozbe/watermelondb/react";
import { memo, useEffect } from "react";

function PostList({ posts }: any) {
  const database = useDatabase();

  useEffect(() => {
    load();
  });

  async function load() {
    const posts = await database.get("posts").query();
    console.log(posts);
  }
  // console.log("posts", posts);
  return <div>OLA</div>;
}

export const EnhancedPostList = PostList;
// export const EnhancedPostList = compose<any, any, any>(
//   withDatabase,
//   withObservables<any, any>([], ({ database }) => ({
//     posts: database.get("posts").query(),
//   }))
// )(PostList);
