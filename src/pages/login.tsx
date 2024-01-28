import { Login } from "@mui/icons-material";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Formik } from "formik";

import { loginMutation } from "@/graphql/mutations/userMutations";
import { useMutation } from "@apollo/client";
import { LoginMutation } from "@/generated/graphql";
import { useRouter } from "next/router";
import { setUserObject } from "@/utils/localStroage";
import { useEffect } from "react";

export default function LogIn() {
  const [loginFunc, { data, error, loading }] =
    useMutation<LoginMutation>(loginMutation);

  const router = useRouter();

  if (error) console.log("error:", error);

  useEffect(() => {
    if (data?.login?.user) {
      setUserObject(data.login.user);
      router.push("/");
    }
  }, [data, router]);

  console.log("data:", data);

  return (
    <div className="w-screen h-[80vh] bg-primary-200 flex justify-center items-center">
      <Card
        className="w-[30%] h-[60%] flex flex-col justify-center items-center px-5 py-2 bg-primary-300 relative"
        variant="elevation"
      >
        <Typography className="text-xl mb-5 text-gray-600">
          Log In <Login />
        </Typography>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(loading);
            loginFunc({
              variables: {
                usernameOrEmail: values.username,
                password: values.password,
              },
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="flex-col">
              <Box className="flex flex-col gap-5">
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  variant="outlined"
                  type="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {errors.username && touched.username && errors.username}
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  variant="outlined"
                />
                {errors.password && touched.password && errors.password}
                <Button
                  variant="outlined"
                  type="submit"
                  className="text-primary-100 border-primary-200 hover:border-primary-200"
                  disabled={isSubmitting}
                >
                  Log In
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
