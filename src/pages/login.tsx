import { Login } from "@mui/icons-material";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Formik } from "formik";

export default function LogIn() {
  return (
    <div className="w-screen h-screen bg-primary-200 flex justify-center items-center">
      <Card
        className="w-[30%] h-[60%] flex flex-col justify-center items-center px-5 py-2 bg-primary-300 relative"
        variant="elevation"
      >
        <Typography className="text-xl mb-5 text-gray-600">
          Log In <Login />
        </Typography>
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {}}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
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
                  Log in
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
