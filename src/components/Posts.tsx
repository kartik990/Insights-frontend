import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Post from "./Post";
import { useQuery } from "@apollo/client";
import { postsQuery } from "../graphql/queries/index";
import Loading from "./loading";
import { Post as PostType } from "./../generated/graphql";

export default function Posts() {
  const { loading, error, data } = useQuery(postsQuery, {
    variables: {
      limit: 10,
    },
  });

  const posts: PostType[] = data?.posts?.posts;

  if (error) console.log(error, error.cause, error.message);

  if (loading) return <Loading loading={loading} />;

  return (
    <Box className="p-16 mx-auto w-[80%] overflow-hidden ">
      <Stack spacing={5}>
        {posts?.map((post: PostType) => (
          <Post key={post.id} post={post} />
        ))}
      </Stack>
    </Box>
  );
}
