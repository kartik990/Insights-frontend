import NavBar from "@/components/NavBar";
import { postQuery } from "@/graphql/queries";
import {
  ArrowDownward,
  ArrowUpward,
  Comment,
  Create,
  Delete,
  Share,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Loading from "@/components/loading";
import { Post } from "@/generated/graphql";
import { formatedDate } from "@/utils/formatedDate";

export default function PostElement() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data, error } = useQuery(postQuery, {
    variables: {
      id: +id!,
    },
  });

  if (loading) return <Loading loading={loading} />;

  const post: Post = data?.post;
  const createdDate = formatedDate(post?.createdAt);

  return (
    <div className="w-screen h-[80vh] bg-primary-200 flex justify-center mt-[50px]">
      <Card
        className="w-[60%] h-[90%] flex flex-col px-5 py-2 bg-primary-300 relative"
        variant="elevation"
      >
        <Box>
          <CardContent className="pl-2 w-auto">
            <Box className="flex justify-between items-center mb-2">
              <Typography
                variant="h5"
                component="div"
                className="text-gray-800 text-center"
              >
                {post.title}
              </Typography>
              <Typography className="text-right text-base text-gray-500">
                {`- ${post?.creator?.username || ""}, ${createdDate}`}
              </Typography>
            </Box>
            <Typography color="text.secondary">{post.text}</Typography>
          </CardContent>
          <CardActions
            disableSpacing
            className="absolute bottom-5 left-5 flex gap-2"
          >
            <Box className="flex items-center border-2 p-0 rounded-xl border-primary-200">
              <IconButton aria-label="like">
                <ArrowUpward className="text-primary-100" />
              </IconButton>
              <Typography className="mx-2 text-primary-100 font-semibold">
                5
              </Typography>
              <IconButton aria-label="unlike">
                <ArrowDownward />
              </IconButton>
            </Box>
            <Box className="flex items-center border-2 p-[8px] rounded-lg border-primary-200">
              <Comment className="text-primary-100" />
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
    </div>
  );
}
