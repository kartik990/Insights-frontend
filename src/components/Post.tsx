import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

import { Box, Button, Card } from "@mui/material";
import {
  ArrowDownward,
  ArrowUpward,
  Create,
  Delete,
  Share,
} from "@mui/icons-material";

import { Post } from "./../generated/graphql";
import { useRouter } from "next/router";
import { formatedDate } from "@/utils/formatedDate";
import { useMutation } from "@apollo/client";
import { voteMutation } from "@/graphql/mutations/postMutations";
import { getUserObject } from "@/utils/localStroage";

interface PostProp {
  post: Post;
}

const PostElement: React.FC<PostProp> = ({ post }) => {
  const createdDate = formatedDate(post?.createdAt);
  const user = getUserObject();
  const router = useRouter();

  const openPost = () => {
    router.push(`/post/${post.id}`);
  };

  const [voteFunc, { data, error, loading }] = useMutation(voteMutation);

  const handleVote = (direction: string) => {
    return (e: Event) => {
      e.stopPropagation();

      if (user?.id) {
        voteFunc({
          variables: {
            value: direction === "upVote" ? 1 : -1,
            postId: post.id,
            userId: user?.id,
          },
        });
      }
      console.log(data, error?.message, loading);
    };
  };

  return (
    <Card
      className="flex px-5 py-2 cursor-pointer bg-primary-300 h-[200px] relative"
      variant="elevation"
    >
      <Box onClick={openPost}>
        <CardContent className="pl-2 w-full">
          <Box className="flex w-full justify-between items-center mb-2">
            <Typography variant="h5" component="div" className="text-gray-800">
              {post.title}
            </Typography>
            <Typography className="absolute right-5 text-base text-gray-500">
              {`- ${post?.creator?.username || ""}, ${createdDate}`}
            </Typography>
          </Box>
          <Typography color="text.secondary">{post.textSnippet}</Typography>
        </CardContent>
        <CardActions
          disableSpacing
          className="absolute bottom-5 left-5 flex gap-2"
        >
          <Box className="flex items-center border-2 p-0 rounded-xl border-primary-200">
            {/* @ts-ignore */}
            <IconButton aria-label="like" onClick={handleVote("upVote")}>
              <ArrowUpward className="text-primary-100" />
            </IconButton>
            <Typography className="mx-2 text-primary-100 font-semibold">
              {post.points}
            </Typography>
            {/* @ts-ignore */}
            <IconButton aria-label="unlike" onClick={handleVote("downVote")}>
              <ArrowDownward />
            </IconButton>
          </Box>
          <Box className="flex items-center border-2 p-[8px] rounded-lg border-primary-200">
            <CommentIcon className="text-primary-100" />
          </Box>
          <Box className="flex items-center border-2 p-[8px] rounded-lg border-primary-200">
            <Share className="text-primary-100" />
          </Box>
        </CardActions>
      </Box>
      <Box className="flex gap-3 absolute bottom-5 right-7 items-end justify-end">
        <Button
          variant="contained"
          className="border-primary-200 text-primary-100 hover:bg-primary-200 "
        >
          <Delete />
        </Button>
        <Button
          variant="contained"
          className="border-primary-200 text-primary-100 hover:bg-primary-200 "
        >
          <Create />
        </Button>
      </Box>
    </Card>
  );
};

export default PostElement;
