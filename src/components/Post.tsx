import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";

import { Box, Button, Card } from "@mui/material";
import {
  ArrowDownward,
  ArrowUpward,
  Create,
  Delete,
  Share,
} from "@mui/icons-material";

export default function Post() {
  return (
    <Card
      className="flex px-5 py-2  bg-primary-300 h-[200px] relative"
      variant="elevation"
    >
      <Box>
        <CardContent className="pl-2 w-auto">
          <Box className="flex justify-between items-center mb-2">
            <Typography variant="h5" component="div" className="text-gray-800">
              Title will be here
            </Typography>
            <Typography className="text-right text-base text-gray-500">
              - Kartik Rai, 4th Nov 2024
            </Typography>
          </Box>
          <Typography color="text.secondary">
            This is a description of the card content. You can add more details
            here. This is a description of the card content. You can add more
            details here. This is a description of the card content. You can add
            more details here.
          </Typography>
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
}
