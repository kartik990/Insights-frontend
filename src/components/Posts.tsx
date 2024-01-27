import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";
import Post from "./Post";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Posts() {
  return (
    <Box className="p-16 mx-auto w-[80%] overflow-hidden ">
      <Stack spacing={5}>
        <Post />
        <Post />
        <Post />
      </Stack>
    </Box>
  );
}
