import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Formik } from "formik";

export default function ForgotPassword() {
  return (
    <div className="w-screen h-screen bg-primary-200 flex justify-center items-center">
      <Card
        className="w-[30%] flex flex-col justify-center items-center px-5 py-8 bg-primary-300 relative"
        variant="elevation"
      >
        <Typography className="text-xl mb-5 text-gray-600">
          Please Enter New Password
        </Typography>
        <Formik
          initialValues={{ password: "" }}
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
                  type="password"
                  name="password"
                  label="New Password"
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
                  Reset Password
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
