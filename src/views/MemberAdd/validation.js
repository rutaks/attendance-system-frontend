import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  fellowship: "",
  location: "",
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string(),
  phoneNumber: Yup.string(),
  fellowship: Yup.string(),
  location: Yup.string(),
});
