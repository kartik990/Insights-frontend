import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Create, Login, Logout } from "@mui/icons-material";
import Link from "next/link";
import { clearLocalStorage, getUserObject } from "@/utils/localStroage";
import { useRouter } from "next/router";

function NavBar() {
  const user = getUserObject();

  const router = useRouter();

  return (
    <AppBar position="sticky" className="bg-primary-100 w-auto">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between">
          <Link href="/">
            <Box className="flex items-center">
              <PsychologyIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Insights
              </Typography>
            </Box>
          </Link>
          <Box className="flex items-center gap-5 text-black">
            <Link href="/post/create">
              <Button
                variant="contained"
                className="hover:bg-primary-200 gap-2"
              >
                <Create />
                Create Post
              </Button>
            </Link>
            {user ? (
              <>
                <Button
                  variant="contained"
                  className="hover:bg-primary-200 gap-3"
                  onClick={() => {
                    router.push("/login");
                    clearLocalStorage();
                  }}
                >
                  Log out
                  <Logout />
                </Button>
                <Avatar className="bg-primary-300 text-[#555555]">
                  {user.username[0]}
                </Avatar>
              </>
            ) : (
              <Button
                variant="contained"
                className="hover:bg-primary-200 gap-3"
                onClick={() => {
                  router.push("/login");
                  clearLocalStorage();
                }}
              >
                <Login />
                Log in
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
