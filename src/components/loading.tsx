import { Box, CircularProgress } from "@mui/material";

const Loading = ({ loading }: { loading: Boolean }) => {
  if (!loading) return null;

  return (
    <Box className="text-center my-10">
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Loading;
