import { RegisterMutation } from "@/generated/graphql";
import { registerMutation } from "@/graphql/mutations/userMutations";
import { setUserObject } from "@/utils/localStroage";
import { useMutation } from "@apollo/client";
import { Login } from "@mui/icons-material";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Register() {
  const [registerFunc, { data, error, loading }] =
    useMutation<RegisterMutation>(registerMutation);

  const router = useRouter();

  if (error) console.log("error:", error);

  useEffect(() => {
    if (data?.register?.user) {
      setUserObject(data.register.user);
      router.push("/");
    }
  }, [data, router]);

  console.log("data:", data);

  return (
    <div className="w-screen h-[80vh] bg-primary-200 flex justify-center items-center">
      <Card
        className="w-[30%] flex flex-col justify-center items-center px-5 py-8 bg-primary-300 relative"
        variant="elevation"
      >
        <Typography className="text-xl mb-5 text-gray-600">
          Register <Login />
        </Typography>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validate={(values) => {}}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(loading);
            registerFunc({
              variables: {
                options: values,
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
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
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
                  Register
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
