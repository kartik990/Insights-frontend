import { Create, Login } from "@mui/icons-material";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Formik } from "formik";

export default function EditPost() {
  return (
    <div className="w-screen h-[80vh] bg-primary-200 flex justify-center items-center">
      <Card
        className="w-[50%] flex flex-col justify-center items-center px-2 py-8 bg-primary-300 relative"
        variant="elevation"
      >
        <Typography className="text-xl mb-5 text-gray-600">
          Edit Post <Create />
        </Typography>
        <Formik
          initialValues={{ title: "", text: "" }}
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
                  id="title"
                  name="title"
                  label="Title"
                  variant="standard"
                  type="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {errors.title && touched.title && errors.title}
                <TextField
                  type="text"
                  name="text"
                  label="Text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
                  variant="outlined"
                  style={{ width: "500px" }}
                  multiline
                  rows={4}
                />
                {errors.text && touched.text && errors.text}
                <Button
                  variant="outlined"
                  type="submit"
                  className="text-primary-100 border-primary-200 hover:border-primary-200"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
